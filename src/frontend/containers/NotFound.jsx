import React, {Fragment} from 'react';
import '../assets/styles/components/NotFound.scss'

const NotFound = () => (
    <Fragment>
        <section className="not-found">
            <h1 className="not-found__title--animated pulse">404</h1>
            <p className="not-found__text">Página no encontrada :(</p>
        </section>
    </Fragment>
);

export default NotFound;