import { Box, Typography, styled } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';  //ama usecontex add krvanu thse comment add krvi hoyto
import { API } from '../../service/api';
import { Delete, Edit } from '@mui/icons-material';
// import { DataContext } from '../../context/DataProvider';
import Comments from './comments/Comments';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
    word-break:break-word;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const Description = styled(Typography)`
    word-break:break-word;

`;


const DetailVeiw = () => {

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    const { id } = useParams();
    // const { account } = useContext(DataContext);
    const [post, setPost] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const deleteBlog = async () => {
        let response = await API.deletePost(post._id);
        if (response.isSuccess) {
            navigate('/')
        }
    };


    return (



        <Container>
            <Image src={post?.picture || url} alt="post" />

            <Box style={{ float: 'right' }}>
                {

                    <>
                        <Link to={`/update/${post?._id}`}>
                            <EditIcon color='primary' />
                        </Link>
                        <DeleteIcon onClick={() => deleteBlog()} color='error' />
                    </>
                }
            </Box>

            <Heading>{post?.title}</Heading>

            <Author>
                <Typography>Author: <span style={{ fontWeight: 900 }}>{post?.username}</span></Typography>
                <Typography style={{ marginLeft: 'auto' }}>{new Date(post?.createdDate).toDateString()}</Typography>
            </Author>

            <Description>{post?.description}</Description>
            {post &&
                <Comments post={post} />
            }
        </Container>



    )
}

export default DetailVeiw;