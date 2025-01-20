import Link from 'next/link';
import "./authlayout.css";
import HeaderNavBar from '@/components/headerNavBar';
import AuthComponent from '@/contexts/authContext';
import { checkSession } from '@/libs/auth';

export default async function AuthenticatedLayout({ children }: Readonly<{ children: React.ReactNode }>)
{
    const session = await checkSession();
    return (
    <AuthComponent data={{
        name: session.data.first_name + " " + session.data.last_name,
        email: session.data.email,
        id: session.data.id
    }}>
        <div>
            <header className="shadow-md h-20 w-full bg-base-100 flex items-center justify-between">
                <HeaderNavBar/>
            </header>
            <div className="flex">
                <aside className="w-80 bg-accent-content min-h-screen">
                    <nav className="flex flex-col gap-3">
                        <Link href="/posts">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                            </svg>
                            <span>Posts</span>
                        </Link>
                        {/* <Link href="/profile">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                            </svg>
                            <span>Profile</span>
                        </Link> */}
                    </nav>
                </aside>
                <div className="p-4 w-full">
                    {children}
                </div>
            </div>
        </div>
    </AuthComponent>
    
  );
}
