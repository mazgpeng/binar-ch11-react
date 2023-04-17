import React from "react";
import { Navbar, Button, Text} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import {AcmeLogo}  from "../pages/nextui/AcmeLogo"

export default function Navsbar() {

    return (
        <>
            <Navbar isBordered variant="sticky" css={{ color: "gray" }} height="80px">

                <Navbar.Brand>
                    <AcmeLogo />
                    <Text b color="inherit" hideIn="xs">
                        GameStation™
                    </Text>
                </Navbar.Brand>

                <Navbar.Content enableCursorHighlight hideIn="xs" variant="highlight-solid-rounded" activeColor="secondary">
                    <Navbar.Link as={NavLink} to="/home"> Home </Navbar.Link>
                    <Navbar.Link as={NavLink} to="/games"> Games</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link color="inherit" as={NavLink} to="/login">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button color="secondary" auto flat as={NavLink} to ="/register">
                            Sign Up
                        </Button>
                    </Navbar.Item>

                </Navbar.Content>

            </Navbar>
            <Outlet />
        </>


    )

}
