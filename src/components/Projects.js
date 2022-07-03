// Import Assets
import jizzyswap from '../assets/jizzyswap.png';
import nft_marketplace from '../assets/nft_marketplace.png';
import raffle from '../assets/raffle.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Cryptocurrency Swap Exchange</h3>
                    <img src={jizzyswap} alt="Jizzy Swap Page" />
                    <p>
                        A full-stack blockchain application.
                    <br></br>
                        An instant cryptocurrency exchange powered by the Ethereum blockchain.
                    </p>
                    <p>
                        It allows users to buy and sell JIZZY tokens at a fixed price against ether.
                    </p>
                    <p>
                        Live on the Rinkeby testnet.
                    </p>

                    <a href="https://celadon-banoffee-0eef4e.netlify.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla?tab=repositories" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Decentralised Smart Contract Lottery</h3>
                    <img src={raffle} alt="Raffle Page" />
                    <p>
                        A full-stack blockchain application.
                    <br></br>
                        A fair, verifiably random, autonomous, decentralised lottery powered by
                        the Ethereum blockchain.
                    </p>
                    <p>
                        It uses Chainlink's Oracle to pick a random winner. 
                    </p>
                    <p>
                        Live on the Rinkeby testnet.
                    </p>

                    <a href="https://brilliant-raindrop-fc5139.netlify.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla?tab=repositories" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Non-fungible Token (NFT) Marketplace</h3>
                    <img src={nft_marketplace} alt="NFT Page" />
                    <p>Upcoming...<br></br>(Within this month)
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla?tab=repositories" target="_blank" className="button">Code</a>
                </div>
                
            </div>
        </section>
    );
}

export default Projects;
