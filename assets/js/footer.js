/* California Pain Consultants — shared site footer + copyright bar.
   Edit the markup here once; every page that contains <footer data-site-footer> picks it up.
   Links are resolved from this script's own location, so it works from any folder depth. */
(function () {
  'use strict';
  var host = document.querySelector('[data-site-footer]');
  if (!host) return;

  var script = document.currentScript;
  var root = script && script.src ? new URL('../../', script.src).href : '/';
  function u(path) { return (path === 'index.html' || path.indexOf('assets/') === 0 || path.indexOf('treatments/spinal-cord-stimulation') === 0) ? root + path : 'javascript:void(0)'; }

  var quick = [
    ['Home', 'index.html'],
    ['About', 'about.html'],
    ['Conditions', 'conditions.html'],
    ['Treatments', 'treatments.html'],
    ['New Patients', 'new-patients.html'],
    ['Referring Providers', 'referring-providers.html'],
    ['Contact', 'contact.html']
  ];
  var legal = [
    ['Privacy Policy', 'privacy-policy.html'],
    ['Accessibility', 'accessibility.html'],
    ['Medical Disclaimer', 'medical-disclaimer.html']
  ];
  function links(list) {
    return list.map(function (l) { return '<li><a href="' + u(l[1]) + '">' + l[0] + '</a></li>'; }).join('');
  }

  host.className = 'sf';
  host.removeAttribute('data-site-footer-fallback');
  host.innerHTML =
    '<div class="sf-top">' +
      '<div class="container sf-grid">' +
        '<div class="sf-brand">' +
          '<a class="sf-logo" href="' + u('index.html') + '"><img src="' + u('assets/images/logo.png') + '" width="410" height="94" alt="California Pain Consultants" loading="lazy"></a>' +
          '<p class="sf-desc">California Pain Consultants provides comprehensive interventional pain care focused on reducing symptoms, restoring function and helping patients return to the activities that matter most.</p>' +
        '</div>' +
        '<nav class="sf-col" aria-label="Quick links">' +
          '<h2 class="sf-h">Quick Links</h2>' +
          '<ul>' + links(quick) + '</ul>' +
        '</nav>' +
        '<div class="sf-col">' +
          '<h2 class="sf-h">Contact Information</h2>' +
          '<address><a href="tel:+15594784757">(559) 478-4757</a><br>7255 N Cedar Ave #101<br>Fresno, CA 93720</address>' +
          '<h2 class="sf-h sf-h-gap">Location</h2>' +
          '<div class="sf-map">' +
            '<iframe title="Map showing California Pain Consultants, 7255 N Cedar Ave #101, Fresno, CA" src="https://www.google.com/maps?q=7255+N+Cedar+Ave+%23101+Fresno+CA+93720&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
          '</div>' +
        '</div>' +
        '<div class="sf-col">' +
          '<h2 class="sf-h">Office Hours</h2>' +
          '<ul class="sf-hours">' +
            '<li><span>Monday</span><span>8 AM–5 PM</span></li>' +
            '<li><span>Tuesday</span><span>8 AM–5 PM</span></li>' +
            '<li><span>Wednesday</span><span>8 AM–5 PM</span></li>' +
            '<li><span>Thursday</span><span>8 AM–5 PM</span></li>' +
            '<li><span>Friday</span><span>8 AM–5 PM</span></li>' +
            '<li><span>Saturday</span><span>Closed</span></li>' +
            '<li><span>Sunday</span><span>Closed</span></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="sf-bottom">' +
      '<div class="container sf-bottom-inner">' +
        '<div>' +
          '<p>© California Pain Consultants. All rights reserved.</p>' +
        '</div>' +
        '<ul>' + links(legal) + '</ul>' +
      '</div>' +
    '</div>';
})();
