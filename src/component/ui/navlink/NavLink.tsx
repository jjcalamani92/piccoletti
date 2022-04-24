
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const dates = ['poliuretano', 'acrilico', 'gloss', 'base', 'protector_de_chasis', 'masilla', 'primer', 'mateante', 'kit']

export const NavLink = () => {

	return (
				<ul>
					<li className="nav-link">
						<Link href="/category/men">
							<a>hombres
							<FontAwesomeIcon className="icon" icon={faCaretDown} />
							</a>
						</Link>
						<div className="dropdown">
						<ul>
							<li className="dropdown-link" >
								<Link href="/men/poleras">
									<a>poleras</a>
								</Link>
							</li>
							<li className="dropdown-link" >
								<Link href="/men/camisas">
									<a>camisas</a>
								</Link>
							</li>
							<li className="dropdown-link" >
								<Link href="/men/camisas">
									<a>pantalones</a>
								</Link>
							</li>
							<div className="arrow"></div>
						</ul>
					  </div>
					</li>
					<li className="nav-link">
						<Link href="/category/women">
							<a>mujeres
							<FontAwesomeIcon className="icon" icon={faCaretDown} />
							</a>
						</Link>
						<div className="dropdown">
						<ul>
							<li className="dropdown-link" >
								<Link href="/women/poleras">
									<a>poleras</a>
								</Link>
							</li>
							<li className="dropdown-link" >
								<Link href="/women/camisas">
									<a>camisas</a>
								</Link>
							</li>
							<li className="dropdown-link" >
								<Link href="/women/pantalones">
									<a>pantalones</a>
								</Link>
							</li>
							<div className="arrow"></div>
						</ul>
					  </div>
					</li>
					<li className="nav-link">
						<Link href="/category/kid">
							<a>niños
							<FontAwesomeIcon className="icon" icon={faCaretDown} />
							</a>
						</Link>
						<div className="dropdown">
						<ul>
							<li className="dropdown-link" >
								<Link href="/kid/poleras">
									<a>poleras</a>
								</Link>
							</li>
							<li className="dropdown-link" >
								<Link href="/kid/camisas">
									<a>camisas</a>
								</Link>
							</li>
							<li className="dropdown-link" >
								<Link href="/kid/pantalones">
									<a>pantalones</a>
								</Link>
							</li>
							<div className="arrow"></div>
						</ul>
					  </div>
					</li>
          <li className="nav-link">
						<Link href="/servicios">
							<a>servicios</a>
						</Link>
          </li>
          <li className="nav-link">
						<Link href="/contacto">
							<a>contacto</a>
						</Link>
          </li>

					
					
				</ul>

	)
};
