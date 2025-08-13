import Link from "next/link";

const linksNavigation = [
    {
        name: 'Jogos',
        href: '/'
    },
     {
        name: 'Perfil',
        href: '/profile'
    }
]


export function NavLinks(){
    return(
        <nav className="flex items-center gap-6">
             {
                linksNavigation.map(({href,name}) => (
                    <Link className="text-zinc-900 font-bold transition ease-linear  [&:hover,&:focus]:text-zinc-600" href={href} key={name}>
                        {name}
                    </Link>
                ))
             }
        </nav>
    )
}