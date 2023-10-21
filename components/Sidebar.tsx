import Link from 'next/link';
import NextImage from 'next/image';
import { Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay
} from "@chakra-ui/layout"
import {MdHome,
    MdSearch,
    MdLibraryMusic,
    MdFavorite,
    MdPlaylistPlay
} from 'react-icons/md'


const navMenu =[
    {
        name: 'Home',
        icon: MdHome,
        route: '/'
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: '/search'
    },
    {
        name: 'Your Library',
        icon: MdLibraryMusic,
        route: '/library'
    }
]
const musicMenu = [
    {
        name: 'Create Playlist',
        icon: MdPlaylistPlay,
        route: '/'
    },
    {
        name: 'favorite',
        icon: MdFavorite,
        route: '/favorite'
    }
]

const Sidebar = () => {
    return (
        <Box width="100%" height="calc(100vh - 100px)" bg='black' paddingX="5px" color="gray">
            <Box paddingY="20px">
                <Box width="120px" marginBottom="20px" paddingX="20px">
                    <NextImage src="/logo.svg" width={120} height={60} />
                </Box>
                <Box marginBottom="20px">
                    <List spacing={2}>
                        {
                            navMenu.map((item, index) => {
                                return (
                                    <ListItem paddingX='20px' fontSize="16px" key={item.name}>
                                        <LinkBox>
                                            <Link href={item.route} passHref>
                                                <LinkOverlay>
                                                    <ListIcon as={item.icon} color="white" marginRight="20px" />
                                                    {item.name}
                                                </LinkOverlay>
                                            </Link>
                                        </LinkBox>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Box>
            </Box>
            <Divider bg="gray.900"/>
            <Box paddingY="20px">
                <Box marginBottom="20px">
                    <List spacing={2}>
                        {
                            musicMenu.map((item, index) => {
                                return (
                                    <ListItem paddingX='20px' fontSize="16px" key={item.name}>
                                        <LinkBox>
                                            <Link href={item.route} passHref>
                                                <LinkOverlay>
                                                    <ListIcon as={item.icon} color="white" marginRight="20px" />
                                                    {item.name}
                                                </LinkOverlay>
                                            </Link>
                                        </LinkBox>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Box>
            </Box>
        </Box>
    )
}
export default Sidebar
