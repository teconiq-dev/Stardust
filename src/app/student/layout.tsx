"use client";

import React from "react";
import { Tabs } from "@/components/ui/tabs";
import SettingsProfilePage from "@/app/student/dashboard/EditProfile/(profile)/page";
import SettingsAccountPage from "@/app/student/dashboard/EditProfile/account/page";
import SettingsInternshipPage from "@/app/student/dashboard/EditProfile/internships/page";
import SettingsProjectPage from "@/app/student/dashboard/EditProfile/projects/page";
import Dashboard from "@/app/student/dashboard/page";


export default function StudentLayout() {
    const links = [
        {
            title: "Dashboard",
            value: "dashboard",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <Dashboard />
                </div>
            ),
        },
        {
            title: "Profile",
            value: "profile",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <SettingsProfilePage />
                </div>
            ),
        },
        {
            title: "Account",
            value: "account",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <SettingsAccountPage />
                </div>
            ),
        },
        {
            title: "Project",
            value: "project",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <SettingsProjectPage />
                </div>
            ),
        },
        {
            title: "Internship",
            value: "internship",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <SettingsInternshipPage />
                </div>
            ),
        },
    ];

    return (
        <div className="h-screen md:h-[40rem] [perspective:1000px] relative flex flex-row mx-auto w-full items-start justify-start my-40">
            <Tabs tabs={links} />
        </div>
    );
}