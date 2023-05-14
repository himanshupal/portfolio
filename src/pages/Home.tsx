import LinkTo from '@/components/Link'
import { Fragment } from 'react'

const Home: React.FC = () => {
  return (
    <Fragment>
      <section>
        <h1>
          <span className='hero'>Hi</span>, I'm Himanshu Pal
        </h1>
        <p>A fullstack developer from Uttar Pradesh, India. Currently working on EVM based blockchain & fullstack development.</p>
      </section>
      <section>
        <p>
          I have been working in fullstack role for more than 2 years at <em>Dyeus</em>
          <sup>
            <LinkTo url='//dyeus.co' />
          </sup>{' '}
          where I started in <span className='link'>April 2021</span> after working for about 3 months at LM Softech.
        </p>
      </section>
      <section>
        <p>
          During my initial working at Dyeus, I worked on the frontend of some e-commerce projects which were based on VueStoreFront{' '}
          <span className='link'>(Vue2)</span>, built multiple REST <span className='link'>API(s)</span>, optimized some data intensive web
          applications at frontend and backend & worked on some other projects based on Javascript & PHP.
        </p>
      </section>
      <section>
        <p>
          Somewhere around the ending of 2021, Dyeus shifted from e-commerce to blockchain industry, it was when I got into blockchain myself & since
          then I have worked on various forks of some well established crypto <span className='link'>dex(es)</span> across various EVM chains.
        </p>
        <p>
          I think my biggest achievement there was an ICO smart contract that I wrote from scratch in Solidity, & it has been used to raise more than{' '}
          <span className='link'>$15M+</span> by now.
        </p>
      </section>

      <hr style={{ border: '1px dotted #808080' }} />

      <section>
        <h2>
          <span className='hero'>Technologies</span> I work with
        </h2>
        <p>
          When it comes to tech, I consider myself an experimental person & due to same reason, I keep trying various things whenever I get a chance,
          by now I have at tried <i>(but not limited to)</i>:
        </p>
        <ul>
          <li>
            Frontend frameworks : <em>Vite</em>
            <sup>
              <LinkTo url='//vitejs.dev' />
            </sup>{' '}
            is my goto framework for frontend only projects mainly because of its blazing fast compilation speed (still waiting for it to get out of
            the box linting support), but when it comes to fullstack monorepo projects, I would gladly choose <em>Next.js</em>
            <sup>
              <LinkTo url='//nextjs.org' />
            </sup>{' '}
            anytime.
          </li>
          <li>
            <em>React</em>
            <sup>
              <LinkTo url='//reactjs.org' />
            </sup>
            : When I started my journey in development, React was the first framework I used, & since then I have worked with <em>Vue2</em>
            <sup>
              <LinkTo url='//v2.vuejs.org' />
            </sup>
            , <em>Vue3</em>
            <sup>
              <LinkTo url='//vuejs.org' />
            </sup>{' '}
            (Composition API) & <em>Svelte</em>
            <sup>
              <LinkTo url='//svelte.dev' />
            </sup>
            , but still think React provides the best development experience than any other frameworks, the usage of hooks & ability to keep multiple
            components in same file is something not those other frameworks provide.
          </li>
          <li>
            <em>Redux</em>
            <sup>
              <LinkTo url='//redux.js.org' />
            </sup>
            : I never liked the usage of any state management library initially because of how they used to have the switch statements to match the
            reducer & actions etc., it was kinda too much work for me to deal with, so I used <em>Zustand</em>
            <sup>
              <LinkTo url='//github.com/pmndrs/zustand' />
            </sup>{' '}
            for some time as replacement & it still works great, but while I was browsing Redux's docs once to understand an old project, I found that
            Redux does provides an excellent type support & also provides the ability to export reducers like normal functions, after that I started
            using it in my projects & now it has become my de-facto choice when it comes to frontend state management.
          </li>
          <li>
            <em>Typescript</em>
            <sup>
              <LinkTo url='//typescriptlang.org' />
            </sup>
            : After working with Javascript for some time, it started becoming a little frustating when I had to look back all the way to check for
            the data types each time I get back on some old code, & that's when I started using Typescript.
            <p>
              Since then, almost of my projects are based on Typescript unless it's only a single file <em>Node.js</em>
              <sup>
                <LinkTo url='//nodejs.org' />
              </sup>{' '}
              script (but then there is <em>Deno</em>
              <sup>
                <LinkTo url='//deno.land' />
              </sup>{' '}
              ftw).
            </p>
          </li>
          <li>
            <em>Solidity</em>
            <sup>
              <LinkTo url='//soliditylang.org' />
            </sup>
            : I have been working with Solidity for about a year now, & I think I'm pretty good at it now, I use it with <em>Hardhat</em>
            <sup>
              <LinkTo url='//hardhat.org' />
            </sup>{' '}
            & <em>ethers</em>
            <sup>
              <LinkTo url='//ethers.org' />
            </sup>{' '}
            & have deployed multiple upgradeable dex forks across various <em>EVM</em>
            <sup>
              <LinkTo url='//ethereum.org/en/developers/docs/evm' />
            </sup>{' '}
            chains, but I still have a long way to go in mastering gas optimizations & also I am willing to learn <em>Yul</em>
            <sup>
              <LinkTo url='//docs.soliditylang.org/en/latest/yul.html' />
            </sup>{' '}
            in future too.
          </li>
          <li>
            <em>GraphQL</em>
            <sup>
              <LinkTo url='//graphql.org' />
            </sup>
            : It may be a little surprising for some, but I started with GraphQL first when I first started learning backend development, & then built
            REST api as per the work requirements using <em>Express</em>
            <sup>
              <LinkTo url='//expressjs.com' />
            </sup>{' '}
            or <em>fastify</em>
            <sup>
              <LinkTo url='//fastify.io' />
            </sup>
            , but I have to admit that the query caching in frontend provided by <em>Apollo GraphQL</em>
            <sup>
              <LinkTo url='//apollographql.com' />
            </sup>{' '}
            is just amazing & that's the main reason for me to prefer GraphQL over REST.
          </li>
          <li>
            <em>Prisma</em>
            <sup>
              <LinkTo url='//prisma.io' />
            </sup>
            : I have been using Prisma for a long time now, it is my preferred ORM for any new backend project, since I don't have to think in SQL
            anymore, I can just focus on more important things like making data consumable by frontend.
            <p>
              At Dyeus, they were initially using <em>Sequelize</em>
              <sup>
                <LinkTo url='//sequelize.org' />
              </sup>{' '}
              but after I introduced them to Prisma, they also liked it, & normalized it's usage across the organization haha.
            </p>
          </li>
          <li>
            CSS libraries : I'm not a big fan of css-in-js
            <sup>
              <LinkTo url='//styled-components.com' name='eg.' />
            </sup>{' '}
            libraries because I think bundling down everything to Javascript costs performance, but it's just my opinion & I might be completely
            wrong, but still I have to say that the theming & typing support provided by styled-components is incomparable to any other frameworks,
            also it's easier to make micro adjustments when everything is just Javascript.
            <p>
              Coming to <em>tailwindcss</em>
              <sup>
                <LinkTo url='//tailwindcss.com' />
              </sup>
              ,it is good for quick prototyping, but it clutters the html real quick, so my go to choice most of the times is <em>SCSS</em>
              <sup>
                <LinkTo url='//sass-lang.com' />
              </sup>{' '}
              or <em>Stylus</em>
              <sup>
                <LinkTo url='//stylus-lang.com' />
              </sup>
              , but I mostly use it like extended CSS.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <p>
          Above mentioned are those things that I work with on a regular basis, but apart from them there are a lot of things (listed below) that I
          tried but couldn't get a chance to work with on professional level, would love to contribute to some OSS or any kind of projects with them
          in future (except for DotNet & PHP lol, they are cool, but just not my type)
        </p>
      </section>
      <section>
        <ul>
          <li>
            <em>Firebase</em>
            <sup>
              <LinkTo url='//firebase.google.com' />
            </sup>
            : Have used firebase's realtime database & authentication in a few projects, & it is undoubtely one of, if not the fastest service I've
            used.
          </li>
          <li>
            <em>Redis</em>
            <sup>
              <LinkTo url='//redis.io' />
            </sup>
            : I had used redis in a single project of mine when I needed an event listener on a queue based on the data received as opposed to a fixed
            key, & even though it served the purpose well, I realized that I was using the wrong tool for the job & it is the task intended for some
            message broker like <em>RabbitMQ</em>
            <sup>
              <LinkTo url='//rabbitmq.com' />
            </sup>{' '}
            & now both of them have my curiosity.
          </li>
          <li>
            <em>Docker</em>
            <sup>
              <LinkTo url='//docker.com' />
            </sup>
            : Docker is one of the most interesting project for me as I've always been the person to try different Linux distributions in{' '}
            <em>VirtualBox</em>
            <sup>
              <LinkTo url='//virtualbox.org' />
            </sup>{' '}
            just because it is fun to have another computer with different OS within your computer, it just opens a lot of exploration possibilities
            too, so the idea of Docker to make individual applications have their own dedicated space & running on bare metal was pretty fascinating
            to me, but I still don't know how to utilize it to it's full potential, currently I use it mostly to separate database instances for
            different projects or when I don't want to install some software onto my system because I just need to test it or can't use it directly
            because of some compatibility issues.
          </li>
          <li>
            <em>Rust</em>
            <sup>
              <LinkTo url='//rust-lang.org' />
            </sup>
            : I have recently started learning Rust again, & I have to say that it is one of the most interesting languages I've ever used, sometimes
            it makes me pull my hairs, but most of the times, it just works smoothly, & I like how it forces me to think differently sometimes just to
            get the program to compile, but once it compiles, there are very less chances for errors to occur, & yes, it is BLAZINGLY FAST too.
            <p>
              I'm using it to solve <em>Advent of Code</em>
              <sup>
                <LinkTo url='//adventofcode.com' />
              </sup>{' '}
              currently & would definitely want to work with it in future.
            </p>
          </li>
          <li>
            <em>Go</em>
            <sup>
              <LinkTo url='//go.dev' />
            </sup>
            : Go took my attention due to it's speed & concurrency benefits, but tbh I just couldn't get my head around all the channels & goroutines,
            still I'm willing to learn it in future, if there is a chance or need for it, it is not a bad language in any sense, just a little too
            verbose, also it's kinda funny how it's STL has got almost everything covered better than all other languages I've tried so far.
            <p>
              Have used it to build a few <em>Fiber</em>
              <sup>
                <LinkTo url='//gofiber.io' />
              </sup>{' '}
              based backend(s) for micro apps.
            </p>
          </li>
          <li>
            <em>Python</em>
            <sup>
              <LinkTo url='//python.org' />
            </sup>
            : I'm in no way a Python expert, & I don't even like pythonic syntax at all, but I've used in to make a few scripts previously & was
            really surprised how concise they turned out to be & when Javascript doesn't provide any support for types natively except for JsDoc,
            Python does at least provide us with an option to specify types. So yeah, can't say it's a bad language in any sense, I'm open to working
            with it as well.
          </li>
          <li>
            gRPC/P2P/Websockets: I've always found the realtime communication interesting, but didn't get a chance to work with them ever, but I'm
            planning to learn these realtime technologies sooner or later.
          </li>
        </ul>
      </section>
      <section>
        <p>
          Even when I like being a fullstack developer, but still I would like to shift to some backend heavy role in future works, preferably in Rust
          or Go. Although I'm not that good at them like in Javascript or Typescript.
        </p>
      </section>
    </Fragment>
  )
}

export default Home
