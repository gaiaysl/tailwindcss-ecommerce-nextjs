
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import styles from '../Component/Navbar.module.scss'
import Image from "next/image";
import Link from "next/link";
import gaia2 from "../Public/images/gaia2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                                        <form>
                                                <input className={styles.searchBox} type="text" name="name"
                                                       tabIndex="1"
                                                       placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                                                       maxLength="50"/>
                                            <FontAwesomeIcon  icon="fa-solid fa-magnifying-glass" />
                                        </form>


                                    </div>

                                    <div className={styles.navigationTwo}>
                                        {categories &&
                                            categories.length > 0 &&
                                            categories.map((category) => (


                                                    <a
                                                        key={category}
                                                        href={`/category/${category}`}
                                                        className={classNames(
                                                            category? styles.durum1 : styles.durum2,
                                                            styles.durum3
                                                        )}
                                                        aria-current={category ? 'page' : undefined}
                                                    >
                                                        {category}
                                                    </a>



                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.right}>

                                <button
                                    type="button"
                                    className={styles.button}
                                >
                                    <span className={styles.rightText}>View notifications</span>
                                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                                    <BellIcon className={styles.rightButton} aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className={styles.menuButton} >
                                            <span className={styles.span}>Open user menu</span>

                                        </Menu.Button>
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
                                                        href="#"
                                                        className={classNames(active ? styles.active1 : '', styles.active2)}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? styles.active3 : '', styles.active4 )}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? styles.active5 : '', styles.active6)}
                                                    >
                                                        Sign out
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
                            {categories.map((category) => (
                                <Disclosure.Button
                                    key={category}
                                    as="a"
                                    href={category}
                                    className={classNames(
                                        category ? styles.item1 : styles.item2 ,
                                        styles.item3
                                    )}
                                    aria-current={category ? 'page' : undefined}
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