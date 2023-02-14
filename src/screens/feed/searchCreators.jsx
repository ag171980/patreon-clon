import Sidebar from "../../components/sidebar";
import { AiOutlineSearch } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { useState } from "react";
import imageProfile from '../../media/profile.png'

import NotFound from '../../media/not_found.svg'
import { Link } from "react-router-dom";
const SearchCreators = () => {
    let listUsers = [
        {
            name: "DankPods",
            description: "Creating videos about portable music",
            cantPosts: 155,
            categorie: "Music"
        },
        {
            name: "ThinkPad",
            description: "Creating music and videos",
            cantPosts: 1505,
            categorie: "Podcast"
        },
        {
            name: "Palestina",
            description: "Creating music for Palestina",
            cantPosts: 1505,
            categorie: "Art"
        },
        {
            name: "Qwerty",
            description: "Creating qwerty",
            cantPosts: 1505,
            categorie: "Podcast"
        },
        {
            name: "Xenoverse",
            description: "Creating games",
            cantPosts: 1505,
            categorie: "Games"
        },
        {
            name: "ArtFury",
            description: "Abstract art",
            cantPosts: 12,
            categorie: "Art"
        },
        {
            name: "Musiccastone",
            description: "Creating of music",
            cantPosts: 1200,
            categorie: "Music"
        },
        {
            name: "GamingTrep",
            description: "Creating videogames",
            cantPosts: 150,
            categorie: "Games"
        },
        {
            name: "Gigamel",
            description: "Creating music",
            cantPosts: 1505,
            categorie: "Music"
        },
        {
            name: "Olivvia",
            description: "Creating videos of Yoga",
            cantPosts: 1505,
            categorie: "Yoga"
        },
        {
            name: "Venezia",
            description: "Creating art",
            cantPosts: 1505,
            categorie: "Art"
        },
        {
            name: "Kanzas",
            description: "Creating music and videos",
            cantPosts: 1505,
            categorie: "Podcast"
        },
    ]
    const [creatorToSearch, setCreatorToSearch] = useState([])
    const [filteredUsers, setFilteredUsers] = useState(undefined)
    const [loading, setLoading] = useState(false)


    const searchCategorie = (catToSearch) => {
        setLoading(true)
        setFilteredUsers(listUsers.filter((user) => user.categorie === catToSearch))
        document.querySelector(".asd").value = catToSearch
    }

    const searchCreator = (e) => {
        e.preventDefault();
        setFilteredUsers(listUsers.filter((user) => user.name.toLowerCase().includes(creatorToSearch)))
    }
    const resetSearch = () => {
        setFilteredUsers(undefined)
        setCreatorToSearch([])
        document.querySelector(".asd").value = ""
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full h-screen flex justify-center items-start xxs:pt-7 pt-10 bg-slate-100">
                <div className="container-feed flex flex-col">
                    <h1 className=" font-bold text-3xl xxs:text-base xxs:self-center xl:text-3xl xl:self-start">Find creators</h1>

                    <form onSubmit={(e) => searchCreator(e)} className="search-bar py-8 flex ">
                        <div className="input relative xxs:mx-auto">
                            <AiOutlineSearch className="absolute top-3 left-3" />
                            {creatorToSearch !== "" && filteredUsers !== undefined &&
                                <FaTimes onClick={resetSearch} className="absolute top-1 right-1 text-xs p-2 h-7 w-7 rounded hover:bg-blue-100 hover:cursor-pointer" />
                            }
                            <input className=" bg-slate-200 px-8 py-2 pl-10 rounded-md text-sm asd xxs:w-80 xs:w-96 xxs:self-center xl:w-96" type="text" name="name_creator" placeholder="Find a creator" onChange={(e) => setCreatorToSearch(e.target.value)} required />
                        </div>
                        <button type="submit" className="mx-2 text-sm bg-violet-500 text-white px-5 font-semibold rounded-md xxs:hidden xsm:block">Search</button>
                    </form>

                    <div className="searches py-10">
                        {
                            //cuando no se busca nada
                            filteredUsers === undefined &&
                            <>
                                <p className=" text-gray-500 text-center text-sm">Popular Searches</p>
                                <div className="topics flex items-center justify-center my-4 xxs:flex-row xxs:flex-wrap">
                                    <p className="topic" onClick={() => searchCategorie('Art')}>Art</p>
                                    <p className="topic" onClick={() => searchCategorie('Music')}>Music</p>
                                    <p className="topic" onClick={() => searchCategorie('Podcast')}>Podcast</p>
                                    <p className="topic" onClick={() => searchCategorie('Games')}>Games</p>
                                    <p className="topic" onClick={() => searchCategorie('Yoga')}>Yoga</p>
                                    <p className="topic" onClick={() => searchCategorie('Sailing')}>Sailing</p>
                                </div>
                            </>
                        }
                        <div className={(filteredUsers !== undefined && filteredUsers.length !== 0) ? "bg-white p-3 rounded-md" : ""}>
                            {
                                //si busca algo y existe
                                filteredUsers !== undefined && filteredUsers.length !== 0 &&
                                filteredUsers.map((user, index) =>
                                    <Link to={`/${user.name}`} className="user flex items-center mb-2 rounded-md py-3 hover:bg-slate-100 hover:cursor-pointer" key={index}>
                                        <img src={imageProfile} style={{ height: "60px" }} alt="" />
                                        <div className="description-user mx-3">
                                            <h3 className="font-bold text-md">{user.name}</h3>
                                            <p className="text-xs">{user.description}</p>
                                            <p className="text-xs mt-2">{user.cantPosts} posts</p>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>

                        {
                            //si busca algo y no existe
                            filteredUsers !== undefined && filteredUsers.length === 0 &&
                            <div className="notFound">
                                <img src={NotFound} style={{ height: "200px", margin: "0 auto" }} alt="" />
                                <p className="text-center py-5">No hay resultados para: <span className="font-bold">{document.querySelector(".asd").value}</span> </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchCreators;