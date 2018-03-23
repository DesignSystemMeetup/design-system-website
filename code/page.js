import PropTypes from 'prop-types';
import React from 'react';

const assignEvents = events => {
	return Object.entries(events).reduce((acc, current) => {
		const [, { date }] = current;
		if (Date.now() > new Date(date).valueOf()) {
			acc.past.push(current)
		} else {
			acc.upcoming.push(current);
		}

		return acc;
	}, {
		upcoming: [],
		past: []
	});
}

const Page = ({
  title,
  stylesheet,
  header,
  main,
  events,
  script,
  _relativeURL,
  _ID,
  _nav,
  _pages,
  _store
}) => {
	const eventsNav = assignEvents(_store() || {});
  return (
    <html>
      <head>
        <title>Cuttlebelle - {title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/site.css`, _ID)}
        />
        {stylesheet != undefined ? (
          <link
            rel="stylesheet"
            href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)}
          />
        ) : null}
      </head>
      <body>
        <div className="top">
          <header role="banner">{header}</header>

          <main>
            <aside>
              <nav>
								<strong>Upcoming</strong>
                <ul>
                  {eventsNav.upcoming.map(([key, { date, host }]) => (
                    <li key={key}>
                      <a href={`#${key}`}>{host} - {date}</a>
                    </li>
                  ))}
                </ul>
								<strong>Past</strong>
                <ul>
                  {eventsNav.past.map(([key, { date, host }]) => (
                    <li key={key}>
                      <a href={`#${key}`}>{host} - {date}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <section>
							<h2 className="dss-page__h2">Events</h2>
              {events.map(({ props }) =>  <div {...props} />)}
            </section>
          </main>
        </div>

        {script != undefined ? (
          <script
            type="text/javascript"
            src={_relativeURL(`/assets/js/${script}.js`, _ID)}
          ></script>
        ) : null}
      </body>
    </html>
  );
};

Page.propTypes = {
  /**
   * title: Homepage
   */
  title: PropTypes.string.isRequired,

  /**
   * main: (partials)(5)
   */
  main: PropTypes.node.isRequired,

  /**
   * footer: (partials)(2)
   */
  footer: PropTypes.node.isRequired
};

Page.defaultProps = {
  events: []
};

export default Page;
