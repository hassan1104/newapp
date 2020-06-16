import React from 'react'

export default ({ portfolioLinks }) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Products</h2>
              <h3 className="section-subheading text-muted">Some of our Products</h3>
            </div>
          </div>
          <div className="row">
            {
                portfolioLinks && portfolioLinks.map(({ title }, index) => 
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src='https://unsplash.it/350/140/?random)}' alt="prod_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>{ title }</h4>
                            <p className="text-muted"></p>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section>
    )
    const portfolioLinks = [
    {
      title: 'Bags',
    },
    {
      title: 'Bottom',
    },
    {
      title: 'Coats',
    },
    {
      title: 'Pullover',
    },
    {
      title: 'Sandals',
    },
    {
      title: 'Sneakers',
    },
    {
      title: 'T-Shirts',
    }
  ]
}
