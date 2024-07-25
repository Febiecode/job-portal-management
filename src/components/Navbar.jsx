'use client'

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Sidebar from './Sidebar'
import ThemeSwitch from './ThemeSwitch'
import headerNavLinks from '@/content/headerNavLinks'
import SectionContainer from './SectionContainer'
import classNames from 'classnames';
import CreateJobBtn from './CreateJobBtn';
import JobFormModal from './JobFormModal';

const Navbar = () => {
    const pathName = usePathname();

    return (
        <>
            <SectionContainer>
                <header className="z-40 bg-transparent py-5 md:py-10">
                    <div className="mx-auto px-5 py-3 flex max-w-5xl items-center justify-between rounded-full shadow-md dark:bg-gray-900 dark:shadow-slate-800">
                        {/* logo */}
                        <div>
                            <Link
                                href="/"
                                className={classNames(
                                    'horizontal-underline hidden text-3xl font-extrabold sm:block',
                                    {
                                        'horizontal-underline-active': pathName === '/',
                                    }
                                )}
                                aria-label="s."
                            >
                                <img src="/static/logo.png" alt="" width={40} height={40} />
                            </Link>
                        </div>

                        {/* Menu */}

                        <div className="hidden space-x-5 sm:flex grow justify-center mx-5 p-4">
                            {headerNavLinks.map(({ title, href }) => {
                                const active = pathName?.includes(href);
                                return (
                                    <Link
                                        prefetch
                                        key={title}
                                        href={href}
                                        className={classNames('horizontal-underline text-base', {
                                            'horizontal-underline-active': active,
                                        })}
                                        aria-label={title}
                                    >
                                        <span className="font-semibold tracking-wide text-gray-900 dark:text-gray-100 p-4">
                                            {title}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* create job button */}
                        <div className="flex items-center">
                            {/* <CreateJobBtn btnText='Create Job' /> */}
                            <JobFormModal />
                            <ThemeSwitch />
                            <Sidebar />
                        </div>

                    </div>
                </header>
            </SectionContainer>



        </>
    )
}

export default Navbar