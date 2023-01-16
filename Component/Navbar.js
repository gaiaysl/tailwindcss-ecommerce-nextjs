
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import styles from '../Component/Navbar.module.scss'
import Image from "next/image";
import Link from "next/link";
import gaia2 from "../Public/images/gaia2.png"



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')

}



export default function Navbar({categories}) {

    return (
        <Disclosure as="nav" className={styles.nav}>
            {({ open }) => (
                <>
                    <div className={styles.navContainer}>
                        <div className={styles.navContent}>

                            <div className={styles.contentTwo}>

                                {/* Mobile menu button*/}
                                <Disclosure.Button className={styles.navButton}>
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className={styles.icon} aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className={styles.menuIcon} aria-hidden="true" />
                                    )}

                                </Disclosure.Button>
                            </div>
                            <div className={styles.menu}>
                                <div className={styles.container}>
                                    <Link href="/">
                                        <Image src={gaia2} alt="logo" width="60"  height="60" className={styles.image}/>
                                    </Link>

                                </div>
                                <div className={styles.navigation}>
                                    <div className={styles.input}>

                                        <form className={styles.form}>
                                            <input className={styles.searchBox} type="text" name="name"
                                                   tabIndex="1"
                                                   placeholder="Aradığınız ürün, kategori veya markayı yazınız 🔍"
                                                   maxLength="50"
                                            />

                                        </form>
                                    </div>
                                    <div className={styles.navigationTwo}>
                                        {categories &&
                                            categories.length > 0 &&
                                            categories.map((category) => (


                                                    <Link
                                                        key={category}
                                                        href={`/category/${category}`}
                                                        className={classNames(
                                                            category? styles.durum1 : styles.durum2,
                                                            styles.durum3
                                                        )}
                                                        aria-current={category ? 'page' : undefined}
                                                    >
                                                        {category}
                                                    </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.right}>

                                {/* Profile dropdown */}

                                <Menu as="div" className="ml-3">
                                    <div className={styles.icons}>
                                        <Menu.Button className={styles.login} >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                            </svg><p className="hidden sm:block">Giriş Yap</p>
                                        </Menu.Button>
                                        <div className={styles.favorite}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                        </svg><p className="hidden sm:block">Favorilerim </p>
                                        </div>
                                        <div className={styles.shopping}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                        </svg><p className="hidden sm:block">Sepetim</p>
                                        </div>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter={styles.enter}
                                        enterFrom={styles.enterFrom}
                                        enterTo={styles.enterTo}
                                        leave={styles.leave}
                                        leaveFrom={styles.leaveFrom}
                                        leaveTo={styles.leaveTo}
                                    >
                                        <Menu.Items className={styles.menuItems}>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/signin"
                                                        className={classNames(active ? styles.active1 : '', styles.active2)}
                                                    >
                                                        Giriş Yap
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (

                                                    <a
                                                        href="/signin"
                                                        className={classNames(active ? styles.active3 : '', styles.active4 )}
                                                    >
                                                        Üye Ol
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className={styles.disc}>

                        <div className={styles.panel}>

                            {categories &&
                                categories.length > 0 &&
                                categories.map((category) => (
                                <Disclosure.Button
                                    key={category}
                                    as="a"
                                    href={`/category/${category}`}
                                    className={classNames(
                                        category.current ? styles.item1 : styles.item2 ,
                                        styles.item3
                                    )}
                                    aria-current={category.current ? 'page' : undefined}
                                >
                                    {category}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>

                </>
            )}


        </Disclosure>


    )
}