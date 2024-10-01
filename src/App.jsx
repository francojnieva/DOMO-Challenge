import Footer from "./components/Footer/Footer"
import MainSection from "./components/MainSection/MainSection"
import NavbarDesktop from "./components/Navbar/NavbarDesktop"
import NavbarMobile from "./components/Navbar/NavbarMobile"

function App() {
	

	return (
		<>
			<header>
				<NavbarMobile />
				<NavbarDesktop />
			</header>
			<MainSection />
			<Footer />
		</>
	)
}

export default App
