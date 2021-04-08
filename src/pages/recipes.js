import React from "react"

import Layout from '../components/Layout'
import Categories from '../components/Categories'
import Message from '../components/Message'
import CtaIcons from '../components/CtaIcons'
import Icons from '../img/icons/icons'
import { getUser } from "../services/auth"

const Recipes = () => {
  return (
    <Layout>
      <Categories />
      <p>
        {
          getUser.email 
          ? `Recipes for ${getUser.email}` 
          : 
          <Message
          class="bg-message-warning-light text-message-warning-dark"
          >
            You are not logged-in
          </Message>
        }
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h2>
        This is just an H2
      </h2>
      <p>
        Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.
      </p>
      <h3>
        Hey there H3 here
      </h3>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <CtaIcons 
            class="cta-icon-primary"
            destination="/"
            src={Icons[1].icon}
            alt="view all"
        />
        <CtaIcons 
            class="cta-icon-secondary"
            destination="/"
            src={Icons[1].icon}
            alt="view all"
        />
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <Message
          class="bg-message-success-light text-message-success-dark" 
        >
          success
        </Message>
        <Message
          class="bg-message-warning-light text-message-warning-dark"
        >
          warning
        </Message>
        <Message
          class="bg-message-danger-light text-message-danger-dark"
        >
          danger
        </Message>
      </div>
    </Layout>
  )
}

export default Recipes