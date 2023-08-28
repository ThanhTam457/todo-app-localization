'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { locales } from '@/middleware';
import { Menu } from '@headlessui/react'
import { dictionary } from '@/dictionaries/content';

const LanguageSwitcher = ({params}: {params: {lang: string}}) => {

    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) 
            return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    }

    return ( 
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {dictionary[params.lang]?.language_name}
            </Menu.Button>
            <Menu.Items  style={{backgroundColor: "#F5F5F5"}}>
                {locales.map((locale) => {
                    return(
                        <Menu.Item key={locale}>
                            <Link href={redirectedPathName(locale)} className='group flex w-full items-center rounded-md px-3 py-2 text-sm'>{locale}</Link>
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
     );
}
 
export default LanguageSwitcher;