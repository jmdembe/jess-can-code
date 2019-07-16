import React from 'react'
import Layout from "../components/layout"
import styled from "styled-components"

const Paragraph = styled.p `
    font-family: 'Nunito', Arial, sans-serif;
`
const Header = styled.h2 `
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 1.5em;
`

const ListItem = styled.li `
    font-family: 'Nunito', Arial, sans-serif;
    font-size: 1em;
`

export default () => (
    <Layout>
        <div>
            <Header>Things I use</Header>
            <Paragraph>This is a running page of tools that I use inspired to make a page of things I use like the ones used by:</Paragraph>
            <ul>
                <ListItem>
                    <a href="https://zen-of-programming.com/uses">Ali Spittel</a>
                </ListItem>
                <ListItem>
                    <a href="https://www.bencodezen.io/uses/">Ben Hong</a>
                </ListItem>
                <ListItem>
                    <a href="https://wesbos.com/uses/">Wes Bos</a>
                </ListItem>
            </ul>

            <Paragraph>I am doing this because I am curious in other people's setups, so I want to share in that content! The theme you will see with my setup
            is that I separate the look of my home and work setup because when I am at home, it is more for fun and on my pet projects. For work, I like
            to set up the mindset that I am focusing on work-related tasks. With that, off we go!</Paragraph>

            <Header>Hardware</Header>
            <ul>
                <li>
                    <Paragraph>Personal: I bought my <a href="https://www.techradar.com/reviews/macbook-pro">
                    15-inch MacBook Pro in November 2018</a> after my <a href ="https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-i5-2.4-13-late-2011-unibody-thunderbolt-specs.html">13-inch MacBook Pro (late 2011)</a> became so slow that I could not handle coding on it anymore.
                    I am not sad about it, it took me through my last two years of college, my early professional career,
                    and a coding bootcamp. It still works. My new laptop is a lot faster with a lot more screen real estate. It is like night and day!</Paragraph></li>
                    <li>
                        <Paragraph>Monitor: I need a new portable monitor because for some reason, my ASUS one does not work with my current laptop <span role="img" aria-label="thinking emoji">🤔</span></Paragraph>
                    </li>
            </ul>
            <Header>Software</Header>
            <ul>
                <li>
                    <Paragraph>Text Editor: My go-to text editor is <a href="https://code.visualstudio.com/">VSCode</a>. I have tried Atom and it was too slow on any of my machines.
                    I also did not like all the setup required on Sublime.</Paragraph>
                </li>
                    <ul>
                        <li>
                            <Paragraph>Theme: I cycle through themes like Lavender Contrast, a theme that is part of the <a href="https://marketplace.visualstudio.com/items?itemName=daylerees.rainglow">Rainglow family of VSCode themes</a>, 
                            Mina Markham's <a href="https://github.com/minamarkham/yonce">
                            Yonc&eacute; theme</a>, and anything in the <a href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme">Material Theme family</a>. As long as it is a dark high-contrast theme, 
                            it is good in my eyes. Dark high-contrast themes help with preventing migraines.</Paragraph>
                        </li>
                    </ul>
                <li>
                    <Paragraph>Terminal: I use <a href="https://www.iterm2.com/">iTerm</a> and <a href="https://github.com/robbyrussell/oh-my-zsh">oh-my-zsh</a>. </Paragraph>
                </li>
                <li>
                    <Paragraph>My Favorite Tools</Paragraph>
                    <ul>
                        <li>
                            <Paragraph>Slack: I am on several channels depending on the computer I am on. I think the only ones that I do not have
                            on my personal machine are my work slack and a few library-specific channels.</Paragraph>
                        </li>
                        <li>
                            <Paragraph>Momentum: This is a Chrome plugin that I see every time I open up a new tab or open the browser. I can use it to write down a daily goal
                            as well as a to-do list.</Paragraph>
                        </li>
                        <li>
                            <Paragraph>Wappalyzer: Another Chrome plugin! I am nosey and like to see what technologies websites are built with. </Paragraph>
                        </li>
                        <li>
                            <Paragraph>WAVE: As a front-end developer, I definitely like to check the accessibility of a website.</Paragraph>
                        </li>
                        <li>
                            <Paragraph>Sketch: I am learning my way around Sketch thanks to a free trial, but it is great with prototyping.</Paragraph>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </Layout>
    
    
)