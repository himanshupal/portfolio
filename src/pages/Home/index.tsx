import { Fragment } from 'react'

const App: React.FC = () => {
  return (
    <Fragment>
      <section>
        <h1>Hi, I&apos;m Himanshu Pal</h1>
        <p>A fullstack developer from Uttar Pradesh, India. Currently working on EVM based blockchain &amp; fullstack development.</p>
      </section>
      <section>
        <p>
          I have been working in fullstack role for more than 2 years at Dyeus
          <sup>
            <a href='//dyeus.co' className='link' target='_blank'>
              <span className='active'>[</span>Link<span className='active'>]</span>
            </a>
          </sup>
          &nbsp;where I started in <span className='link'>April 2021</span> after working for about 3 months at LM Softech.
        </p>
      </section>
      <section>
        <p>
          During my initial working at Dyeus, I worked on the frontend of some e-commerce projects which were based on VueStoreFront{' '}
          <span className='link'>(Vue2)</span>, built multiple REST <span className='link'>API(s)</span>, optimized some data intensive web
          applications at frontend and backend &amp; worked on some other projects based on Javascript &amp; PHP.
        </p>
      </section>
      <section>
        <p>
          Somewhere around the ending of 2021, Dyeus shifted from e-commerce to blockchain industry, it was when I got into blockchain myself &amp;
          since then I have worked on various forks of some well established crypto <span className='link'>dex(es)</span> across various EVM chains.
        </p>
        <p>
          I think my biggest achievement there was a simple (not so) ICO smart contract that I wrote from scratch in Solidity, &amp; it has been used
          to raise more than <span className='link'>$15M+</span> by now.
        </p>
      </section>
      <hr style={{ border: '1px dotted #808080' }} />
      <section>
        <h2>Technologies I have worked with</h2>
        <p>
          When it comes to tech, I consider myself an experimental person &amp; due to same reason, I keep trying various things whenever I get a
          chance, by now I have at tried (not limited to) Vite, SWC, React, Vue, Svelte, Solidity, PHP, Node, Express, NextJS, MongoDB, MySQL,
          PostgreSQL, Sqlite, Redis, Python, Golang, Rust, Docker, Typescript, Javascript, SCSS, Styled components, TailwindCSS, Hardhat, ethers, web3, Redux, Firebase, REST, GraphQL, gRPC
          etc.
        </p>
      </section>
      <section>
        <p>
          Although I like working as fullstack developer, but still I would like to shift to some backend heavy role in future works, preferably in
          Rust or Go. Although I&apos;m not that good at them like in Javascript or Typescript.
        </p>
      </section>
    </Fragment>
  )
}

export default App
