

export default function GuestLayout({ children } : Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <header className="bg-neutral px-4 shadow-md h-20 w-full flex flex-row gap-6">
                <div id="logo" className="text-2xl font-bold flex flex-row items-center h-full">Dateme</div>
            </header>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}
