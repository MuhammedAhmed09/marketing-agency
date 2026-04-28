import { motion } from 'framer-motion';
import Link from 'next/link';

interface DropDownMenuProps {
    onClose: () => void;
}

const pages = [
    {id: 0, path: "pricing", name: "Pricing"},
    {id: 1, path: "contact", name: "Contact"},
    {id: 2, path: "booking", name: "Book a call"},
]

export default function DropDownMenu({ onClose }: DropDownMenuProps) {
    return(
        <motion.div className='w-full h-screen
        bg-linear-to-b from-neutral-50 rounded-t-3xl z-50
        to-neutral-400 bg-opacity-50 text-slate-300
        p-6 space-y-4 absolute top-28 left-0'

        initial={{ opacity: 0, y: '-80%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-100%' }}
        transition={{ duration: 0.5 }}
        >
            <div className='flex flex-col space-y-10'>
                {pages.map((page) => (
                    <Link 
                        key={page.id} 
                        href={page.path}
                        className='text-black text-2xl'
                    >
                        {page.name}
                    </Link>
                ))}
            </div>
        </motion.div>
    )
}