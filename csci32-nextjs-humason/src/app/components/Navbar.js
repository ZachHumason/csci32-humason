const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Week 1',
    href: '/week1-page',
  },
  {
    title: 'TBD',
    href: '#',
  },
  {
    title: 'TBD',
    href: '#',
  },
  {
    title: 'TBD',
    href: '#',
  },
]

export default function Navbar() {
  return (
    <div className="flex justify-between gap-4 m-6 items-center">
      <div className="flex gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 bg-rose-600 text-red-100 shadow-md rounded-md text-lg transition-all hover:bg-rose-800 active:bg-rose-400"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
