import React from 'react';
import { Link } from 'react-scroll/modules';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Tp1 from '../assets/gallery/TP-1.webp';
import Tp2 from '../assets/gallery/TP-2.webp';
import Tp3 from '../assets/gallery/TP-3.webp';
import Tp5 from '../assets/gallery/TP-5.webp';
import Tp6 from '../assets/gallery/TP-6.webp';
import Tp7 from '../assets/gallery/TP-7.webp';
import Tp8 from '../assets/gallery/TP-8.webp';
import Tp9 from '../assets/gallery/TP-9.webp';
import Tp10 from '../assets/gallery/TP-10.webp';
import Tp11 from '../assets/gallery/TP-11.webp';
import Tp12 from '../assets/gallery/TP-12.webp';
import Tp13 from '../assets/gallery/TP-13.webp';
import Tp14 from '../assets/gallery/TP-14.webp';
import Tp15 from '../assets/gallery/TP-15.webp';
import Tp16 from '../assets/gallery/TP-16.webp';
import Land1 from '../assets/gallery/land-1.webp';
import Land2 from '../assets/gallery/lan-2.webp';
import Land3 from '../assets/gallery/lan-3.webp';
import Land4 from '../assets/gallery/land-4.webp';
import Land5 from '../assets/gallery/land-5.webp';
import Land6 from '../assets/gallery/land-6.webp';
import Land7 from '../assets/gallery/land-7.webp';
import Land8 from '../assets/gallery/land-8.webp';
import Land9 from '../assets/gallery/land-9.webp';
import Land10 from '../assets/gallery/land-10.webp';
import Land11 from '../assets/gallery/land-11.webp';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Gallery = () => {
    return (
        <section className="bg-site h-full pb-4 pt-4" id="gallery">
            <Banner />
            <div className="container mx-auto mt-10">
                <div className=" container flex justify-start pb-5">
                    <RouterLink
                        to={'/'}
                        className="btn btn-sm  uppercase tracking-wide flex items-center justify-center"
                    >
                        {"Page d'acceuil "}
                    </RouterLink>
                </div>
                <div>
                    <div className=" flex flex-col gap-3 item-center">
                        <div className=" flex flex-col lg:flex-row gap-4">
                            <div className=" flex flex-col gap-4 w-[100%] mx-auto">
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp7}
                                        className=" hover:scale-125 transition-all duration-500 "
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land1}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Landscape d'un terrain avec des ruines"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp11}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'un jeune homme debout"
                                    />
                                </div>
                            </div>
                            <div className=" flex flex-col gap-4 w-[100%] mx-auto">
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land2}
                                        className=" hover:scale-125 transition-all duration-500 "
                                        alt="Chute d'eau"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp13}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp6}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                            </div>
                            <div className=" flex flex-col gap-4 w-[100%] mx-auto">
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp8}
                                        className=" hover:scale-125 transition-all duration-500 "
                                        alt="Portrait d'un jeune homme debout"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land3}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Chapelle de Maznod"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp3}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Enfant habillé en blanc"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col lg:flex-row gap-4">
                            <div className=" flex flex-col gap-4 w-[100%] mx-auto">
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land4}
                                        className=" hover:scale-125 transition-all duration-500 "
                                        alt="Ceremonie de mariage"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp5}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land5}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Bouquet de mariage"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land7}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Fille d'honneur"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp1}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Little boy standing hands in pockets"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp9}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Girl sitting on a bancket"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp12}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp14}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                            </div>
                            <div className=" flex flex-col gap-4 w-[100%] mx-auto">
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp2}
                                        className=" hover:scale-125 transition-all duration-500 "
                                        alt="Ceremonie de mariage"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land6}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp10}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Bouquet de mariage"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land8}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Route pas en beton"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land9}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Batiment en ruine"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land10}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Batiment en ruine"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land11}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Filles et garcons d'honneur"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp15}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Little boy sitting on a bancket"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp16}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Little boy with hands in pockets"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link
                    to="gallery"
                    spy={true}
                    smooth={false}
                    offset={0}
                    duration={500}
                >
                    <div className=" container flex justify-start mt-5">
                        <p className=" btn p-2 uppercase tracking-wide flex items-center justify-center">
                            <AiOutlineArrowUp className="cursor-pointer w-[40px] h-[40px]" />
                        </p>
                    </div>
                </Link>
            </div>
            <Footer />
        </section>
    );
};

export default Gallery;
