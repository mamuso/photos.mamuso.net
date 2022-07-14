import Link from 'next/link';

const Logo = ({ cup, context }: any) => (
  <Link href="/">
    <a>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  id='logo'>
        <path d="M15.9754 19.608C15.9846 19.611 15.9938 19.6141 16.003 19.6172C20.006 20.9556 23.8594 21.0943 23.8594 21.0943C23.8594 21.0943 24.7668 12.7812 21.9716 7.46875C19.1764 2.15627 12.8992 0 12.8992 0C12.8992 0 -0.190004 3.87592 0.00209394 11.2634C0.194192 18.6509 5.15708 22.2608 5.15708 22.2608C5.15708 22.2608 6.36737 21.0943 8.03858 19.5328C8.06562 19.5075 8.09249 19.4824 8.11919 19.4574C8.23902 19.5917 8.36164 19.7218 8.48704 19.8472C11.0691 22.4289 14.1499 23.5068 14.1499 23.5068L15.9754 19.608Z"/>
      </svg>
    </a>
  </Link>
);

export default Logo;