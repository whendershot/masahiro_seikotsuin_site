import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { connect, Global, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"

import Script from "./script.tsx"

import gutenbergStyle from "/wordpress/wp-includes/css/dist/block-library/style.css"
import gutenbergTheme from "/wordpress/wp-includes/css/dist/block-library/theme.css"

import List from "./list.view"
import Post from "./post.view"
import Page from "./page.view"
import PageError from "./page-error.view"
import Loading from "./loading.view"

import AppointmentListView from "./appointment/AppointmentList.view"
import AppointmentCreateView from "./appointment/AppointmentCreate.view"
import AppointmentDetailsView from "./appointment/AppointmentDetails.view"
import AppointmentEditView from "./appointment/AppointmentEdit.view"

const Root = ({state}) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <Global styles={css(gutenbergStyle)} />
            <Global styles={css(gutenbergTheme)} />
            <Global 
                styles={css`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        // border: 1px dashed red;
                    }
                    
                    html {
                        font-family: system-ui, Verdana, Arial, sans-serif;
                    }
                `}
            />
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous" defer />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous" defer />
            <Header>
                <HeaderContent>
                    <h1>Seikotsuin Site Prototype</h1>
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" link="/landing-page/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" link="/">Posts</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" link="/sample-page/">Sample page</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" link="/privacy-policy/">Privacy Policy</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <div className="dropdown-toggle nav-link" role="button" id="appointmentDropdown" data-bs-toggle="dropdown">Appointments</div>
                                        <ul className="dropdown-menu">
                                            <li><Link className="nav-link" link="/appointments/create/">Create an Appointment</Link></li>
                                            <li><Link className="nav-link" link="/appointments/">List Appointments</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </HeaderContent>
            </Header>
            <hr />
            <Main>
                <Switch>
                    <AppointmentListView when={state.router.link === "/appointments/"}></AppointmentListView>
                    <AppointmentCreateView when={state.router.link === "/appointments/create/"}></AppointmentCreateView>
                    <AppointmentEditView when={data.isEditing && data.isAppointment}></AppointmentEditView>
                    <AppointmentDetailsView when={data.isAppointment}></AppointmentDetailsView>
                    <Loading when={data.isFetching}></Loading>
                    <List when={data.isArchive}></List>
                    <Post when={data.isPost}></Post>
                    <Page when={data.isPage}></Page>
                    <PageError when={data.isError}></PageError>
                </Switch>
            </Main>
        </>
    )
}

export default connect(Root)

const Header = styled.header`
    background-color: #e5edee;
    border-width: 0 0 8px 0;
    border-style: solid;
    border-color: rebeccapurple;
    h1 {
        color: #4a4a4a;
    }
`

const HeaderContent = styled.div`
    max-width: 800px;
    padding: 2em 1em;
    margin: auto;
`
const Main = styled.main`
    max-width: 800px;
    padding: 1em;
    margin: auto;
    img {
        max-width: 100%;
    }
    h2 {
        margin: 0.5em 0;
    }
    p {
        line-height: 1.25em;
        margin-bottom: 0.75em;
    }
    figcaption {
        color: #828282;
        font-size: 0.8em;
        margin-bottom: 1em;
    }
`