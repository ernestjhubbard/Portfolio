import React from 'react';

export default function Navigation() {
  return (
    <nav class="red lighten-2">
      <div class="nav-wrapper row">
        <a href="#" class="brand-logo">EJH Codes</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down col s6">
          <li className="col s3">Home</li>
          <li className="col s3">Skills</li>
          <li className="col s3">Projects</li>
          <li className="col s3">Contact</li>
        </ul>
      </div>
    </nav>
  )
}