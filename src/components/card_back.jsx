import React from 'react';

/**
 * Functional component that shows information at the back of the contact card
 */
function Back() {
     return (
       <div className="card_back">
         <div className="container">
           <h3>About Me</h3>
           <p>
             Full Stack Engineer passionate about developing and maintaining complete application framework.
              Front-End Specialities: React.js, Backbone.js, Angularjs, nodejs, CSS, SASS, HTML
              Databases: MySQL, Cassandra
              Back-end: Python
            </p>
            <h2>Experience</h2>
            <h4>Cisco Systems- Software Engineer</h4>
            <p>
              Currently developing and maintaining the UI for Cisco's Next Gen Real Time Test Automation Platform. Providing a configurable interface that allows customization based on the user preferences and storing these preferences in Redis. Creating multiple layouts(list/grid/grouped) to allow customization, creating different themes for the application. Developing the feature to determine disk usage and alert the user when disk space is running out so as to be more proactive than reactive. Providing users, the ability to call webservices from the UI instead of the CLI and displaying the response on the UI. Testing to make sure the application is cross browser compatible. Experience with browserify, webpack, npm

              Developed a web analytics application that simplifies the way Cisco identifies, selects, pursues and tracks emerging technology trends. Leveraged Plone to create the initial form submission page through which users can submit innovative ideas. Designed the MySQL database tables and structures for storing data and developed the web-services to translate data from database to a web application that uses D3, creating a visual graph to keep track of the current trends.

              Enhanced the web application to provide capabilities like filtering technology profiles based on various categories, created an interim admin control page that allows admins to accept/reject a project proposal and also provided various publishing capabilities.

              Designed and implemented hostname-based certificate generation with subject alternative names.
              Led the effort to upgrade all the back-end web-service calls that accept MAC address as CN (Common Name) to additionally accept hostname as CN and subject alternative names.

              Led the web-service development effort to generate custom CSR (Certificate Signing Request) that accepts SAN (Subject Alternative Names) and sends requests to custom root CA to generate certificates required for the Test Automation Platform.
            </p>
         </div>
       </div>
     );
}

export default Back;
