import React from 'react'
import { NextAuth } from 'next-auth/client'

export default class extends React.Component {
  static async getInitialProps({req}) {
    return {
      session: await NextAuth.init({req}) // Populate 'this.props.session'
    }
  }
  render() {
    if (this.props.session.user) {
      return(
        <div>
          <p>You are logged in as {this.props.session.user.name || this.props.session.user.email}.</p>
        </div>
        )
    } else {
      return(
        <div>
          <p>You are not logged in.</p>
        </div>
      )
    }
  }
}


// https://nextjs-starter.now.sh/examples/authentication

// When a page is loaded by client side logic, NextAuth fetches the session state using an AJAX call.

// When a page is Server Side Rendered, NextAuth loads the session state from Express Session by parsing the req object.

// If a user is signed in this.props.session.user will contain a user object. If they are not logged in, it will not be set.

// To improve rendering performance, NextAuth will attempt to cache the session state (but not the actual session token) in localStorage when available, to avoid a render-blocking AJAX call to fetch session state every time a page is loaded.

// Combined with <Link> preloading, this allows pages to rendered extremely quickly client side, even when signed in. The caching of session data can be be disabled by setting sessionRevalidateAge to 0 in next-auth.functions.js. By default session data is cached for 60 seconds before it revalidates.