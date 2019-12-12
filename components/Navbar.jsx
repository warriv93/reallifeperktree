import Link from 'next/link';

const Navbar = () => (
    <div>
        <Link href="/"> 
            <button>Root</button>  
        </Link>
        <Link href="/bitzPrices"> 
            <button>Bitcoin prices</button>  
        </Link>
    </div>
);
  
export default Navbar;
  