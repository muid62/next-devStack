"use client";
import { getTechnology } from '@/lib/getPost';
import React, { useState, useEffect } from 'react';
import TechnologyCard from '../components/TechnologyCard';
import YourStack from '../components/YourStack';
import { toast } from 'react-toastify';

const TechnologiesPage = () => {
    const [technologies, setTechnologies] = useState([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    useEffect(() => {
        getTechnology().then(setTechnologies);
    }, []);

    const handleAddToStack = (techId) => {
        const technology = technologies.find(tech => tech.id === techId);
        if (!technology) return;

        const isAlreadyAdded = selectedTechnologies.some(stack =>
            stack.id === techId
        );

        if (isAlreadyAdded) {
            toast.warning(`${technology.name} is already added to Your Stack!`);
            return;
        }

        setSelectedTechnologies(selected => [
            ...selected, technology
        ]);

        toast.success(`${technology.name} added to your stack!`);
    }

    const handleRemove = (id) => {
        const technology = selectedTechnologies.find(techs => techs.id === id)

        const updatedStack = selectedTechnologies.filter(technology => technology.id !== id)
        setSelectedTechnologies(updatedStack);

        toast.error(`${technology?.name} has been removed.`);
    }

    const handleRemoveAll =() => {
        setSelectedTechnologies([]);
        toast.info("Your stack has been cleared.");
    }
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="mb-8 p-2">
                <h2 className="text-2xl md:text-4xl font-extrabold md:leading-relaxed text-center md:text-left">Explore the <span className="text-gradient-custom">Technologies</span></h2>
                <p className="text-base leading-normal text-slate-600 text-center md:text-left">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:col-span-3 xl:grid-cols-3">
            {technologies.map(tech => {
                    const isAdded = selectedTechnologies.some(stack => 
                        stack.id === tech.id)
                return(
                    <TechnologyCard key={tech.id} tech={tech} isAdded={isAdded} handleAddToStack={handleAddToStack} />
                );
            })}
            </div>
            <YourStack selectedTechnologies={selectedTechnologies} removeBtn={handleRemove} removeAllBtn={handleRemoveAll} />
            </div>
        </section>
    );
};

export default TechnologiesPage;