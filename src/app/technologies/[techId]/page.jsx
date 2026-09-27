import TechnologiesDetailsCard from "@/app/components/TechnologiesDetailsCard";
import { getTechnology } from "@/lib/getPost";
import React from "react";

const TechnologyDetailsPage = async ({ params }) => {
    const { techId } = await params;
    const technologies = await getTechnology();

    const tech = technologies.find((technology) => technology.id === techId);
    console.log(tech)
    if (!tech) {
        return (
        <main className="mx-auto max-w-7xl px-4 py-16">
            <div className="text-center">
            <h1 className="text-xl font-bold flex justify-center items-center mt-20">Technology not found!</h1>

            <p className="mt-2 text-sm text-base-content/60">
                The technology you&apos;re looking for doesn&apos;t exist.
            </p>
            </div>
        </main>
        );
    }
    return(
        <main className="min-h-screen bg-base-100/30 px-4 py-8 sm:py-12">
            <TechnologiesDetailsCard tech={tech} />
        </main>
    );
};

export default TechnologyDetailsPage;
