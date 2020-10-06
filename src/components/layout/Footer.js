import React from 'react';

function Footer() {
  return (
    <div>
      <footer class="page-footer  blue darken-4 white-text center">
        <div class="container">
          <div class="row">
            <div class="col l6 m4 l6">
              <h5 class="white-text">Who we are?</h5>
              <p class="grey-text text-lighten-4">
                Add some texutal content for describing about your
                company.organization or website.
              </p>
            </div>
            <div class="col l4 offset-l2 m4 l3">
              <h5 class="white-text">Services</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    ERP Implementation
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Web Hosting
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Azure Implementation
                  </a>
                </li>
              </ul>
            </div>
            <div class="col l4 offset-l2 m4 l3">
              <h5 class="white-text">About </h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    About the Company
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Privacy
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            � 2020 Copyright - All Rights Reserved
            <a class="grey-text text-lighten-4 right" href="#!">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
