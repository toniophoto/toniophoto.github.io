import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portrait.webp';
import img2 from '../assets/wedding-2.webp';
import img3 from '../assets/studio-2.webp';
import { Link as RouterLink } from 'react-router-dom';
const Work = () => {
    return (
        <section className="section h-full" id="work">
            <div className=" container mx-auto">
                <div className=" flex flex-col lg:flex-row items-end gap-x-10">
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className=" flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
                    >
                        <div>
                            <h2 className=" h2 leading-tight text-accent">
                                My Lastest <br /> work
                            </h2>
                            <p className=" max-w-sm mb-16">
                                Que vous cherchiez à capturer un événement
                                spécial moment de votre vie ou promouvoir votre
                                entreprise, je travaille étroitement avec vous
                                pour comprendre votre vision et livrer des
                                images parfaites.
                            </p>
                            <RouterLink to={'/gallery'}>
                                <button className="btn btn-sm">
                                    Voir toute la gallerie
                                </button>
                            </RouterLink>
                        </div>
                        <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img
                                className=" group-hover:scale-125 transition-all duration-500"
                                src={img1}
                                alt="Studio de Photographie"
                            />
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className=" text-gradient">Portrait</span>
                            </div>
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className=" text-2xl text-white">
                                    Votre expression naturel.
                                </span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className=" flex-1 flex flex-col gap-y-10"
                    >
                        <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={img2}
                                alt="Evènements de mariage"
                            />
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className=" text-gradient">
                                    Evènements
                                </span>
                            </div>
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className=" text-2xl text-white">
                                    Marquez votre histoire
                                </span>
                            </div>
                        </div>
                        <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={img3}
                                alt="Studio de Photographe"
                            />
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className=" text-gradient">
                                    Photographie de produits
                                </span>
                            </div>
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className=" text-2xl text-white">
                                    La valeur de vos produits...
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
