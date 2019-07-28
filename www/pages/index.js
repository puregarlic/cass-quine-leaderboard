import { useState, useEffect } from 'react'
import Head from 'next/head'
import { styled } from 'linaria/react'
import { motion } from 'framer-motion'
import ky from 'ky-universal'

import Calculator from '../components/calculator'
import Leaderboard from '../components/leaderboard'

const Container = styled(motion.main)`
  width: 100vw;
  display: grid;
  padding: 34px 5px;
  grid-template-areas: '. board calc .';
  grid-template-columns: 1fr minmax(auto, 815px) minmax(auto, 350px) 1fr;
  grid-gap: 34px;
`

const Page = props => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/static/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <title>CASS Quine Challenge Leaderboard</title>
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      </Head>
      <Container>
        <Leaderboard scores={props.scores} />
        <Calculator />
      </Container>
      <style jsx global>{`
        *,
        *:before,
        *:after {
          font-family: Inter, -apple-system, Segoe UI, sans-serif;
          box-sizing: border-box;
          color: #333;
        }

        body {
          margin: 0;
          min-height: 100vh;
          background-image: linear-gradient(
            to top,
            #ff9a9e 0%,
            #fecfef 99%,
            #fecfef 100%
          );
        }
      `}</style>
    </>
  )
}

Page.getInitialProps = async ({ req, res }) => {
  const data = await ky(
    `${
      req
        ? `${req.headers['x-forwarded-proto']}://${
            req.headers['x-forwarded-host']
          }`
        : window.location.origin
    }/api/scores`
  ).json()

  if (res) {
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')
  }

  return { scores: data }
}

export default Page
