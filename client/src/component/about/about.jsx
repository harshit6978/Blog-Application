
import { Box, styled, Typography} from '@mui/material';
// import { Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`
const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">IM HARSHIT LATHIYA</Typography>
                <Text variant="h5">Im study in B.c.a from smt z.s patel collage Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto corporis ipsam cumque et minus earum saepe maxime modi quo odio tempore quisquam voluptates libero, at consectetur mollitia. Odio, iure qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores numquam voluptatum id voluptate sit reiciendis quo nam sequi est possimus facere enim perspiciatis, iste laborum quidem blanditiis dolor molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempora sunt dolore, reprehenderit in saepe placeat eaque eos dicta earum vitae sed quis veritatis? Sed aut aliquam itaque quia vitae? <br></br>        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quis, maxime voluptatibus id neque pariatur doloremque cumque nihil, consectetur obcaecati rem molestias at voluptatum. Ea placeat sequi possimus quaerat temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus necessitatibus, incidunt officiis a iste animi accusantium assumenda earum, modi dolorem eaque autem! Facilis quia itaque ex dolorum debitis eaque eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam nisi dolore eum adipisci repellendus voluptatem blanditiis. Sapiente voluptatum, impedit facere saepe nulla quo quam, in aut hic sunt ullam.
                    {/* <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box> */}
                </Text>
                {/* <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text> */}
            </Wrapper>
        </Box>
    )
}



export default About;