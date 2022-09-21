function navbar1(){
    return `<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="https://www.timecamp.com"><img
                src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg" alt="TimeCamp logo" width="126px"
                height="31px"></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto menu-1">
                <li class="nav-item toggle-button dropdown-hover">
                    <a href="https://www.timecamp.com/time-tracking/" id="" type="button" class="btn dropdown-toggle nav-link" data-hover="dropdown"
                        aria-haspopup="true" aria-expanded="false">Features</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a class="dropdown-box dropdown-item" href="/time-tracking/productivity-tracking/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/productivity-tracking.svg"
                                    alt="productivity tracking icon">
                                <span>Productivity tracking</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/time-tracking/automatic-time-tracking/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/automatic-time-tracking.svg"
                                    alt="Automatic time trackingicon">
                                <span>Automatic time tracking</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/time-tracking/reporting/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/reporting.svg"
                                    alt="Reporting tracking icon">
                                <span>Reporting</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/time-tracking/rapid-timesheet-approvals/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/timesheet-approvals.svg"
                                    alt="Timesheet approvals tracking icon">
                                <span>Timesheet approvals</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/time-tracking/invoicing">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/invoicing.svg"
                                    alt="Invoicing tracking icon">
                                <span>Invoicing</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/time-tracking/billing/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/billing-rates.svg"
                                    alt="Billing rates &amp; budgeting tracking icon">
                                <span>Billing rates &amp; budgeting</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/time-tracking/attendance/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/attendance-tracking.svg"
                                    alt="attendance tracking icon">
                                <span>Attendance</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pricing/" title="time tracker pricing">Pricing</a>
                </li>
                <li class="nav-item toggle-button dropdown-hover">
                    <a type="button" class="btn dropdown-toggle nav-link" data-hover="dropdown" aria-haspopup="true"
                        aria-expanded="false">Integrations</a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li>
                            <a class="dropdown-box dropdown-item" href="/integrations/trello-time-tracking/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Trello.svg"
                                    alt="trello integrations icon">
                                <span>Trello</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/integrations/google-calendar-time-tracking/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/GCalendar.svg"
                                    alt="Google Calendar integrations icon">
                                <span>Google Calendar</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/integrations/ical-time-tracking/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/iCal.svg"
                                    alt="ical integrations icon">
                                <span>iCal</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/integrations/asana-time-tracking/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Asana.svg"
                                    alt="asana integrations icon">
                                <span>Asana</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/integrations/monday-com-time-tracking/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Monday.svg"
                                    alt="monday-com integrations icon">
                                <span>Monday.com</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/integrations/jira-time-tracking/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Jira.svg"
                                    alt="jira integrations icon">
                                <span>Jira</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-box dropdown-item" href="/integrations/">
                                <img src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/all-integrations.svg"
                                    alt="all integrations icon">
                                <span>All integrations</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/blog/" title="time tracker remote">Blog</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto menu-2">
                <li class="nav-item booking-border-menu">
                    <a class="nav-link" href="/free-demo/?ref=header" onclick="userengage('event.demo_link_clicked')"
                        title="free demo about TimeCamp time tracker">Book a
                        Demo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-menu-login btn-highlighted cta-menu-login"
                        href="https://app.timecamp.com/auth/login" title="login to TimeCamp time tracker">Sign in</a>
                </li>
                <li id="isLoggedHeader" class="nav-item">
                    <a class="
              nav-link
              btn-menu-register btn-filled
              selective
              cta-menu-register
            " href="https://app.timecamp.com/auth/register" title="sign up for free time tracker">Start tracking
                        time</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`
}
export default navbar1