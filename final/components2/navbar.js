
function navbar(){
    return`  <div id="upper_navbar">
    <p>Want to become a Reseller, Affiliate, or Integration Partner? We are recruiting for our new Partner Programs. <a href="">Learn more and apply here ➡️</a></p>
</div>
<div id="buttom_navbar">
    <div>
    <div class="header_img" onclick="(location.href='index.html')"> 
        <img src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg" alt="">
        </div>
        <div id="buttom_one">
            <div id="features">
                <div class="drop">
                    <p class="text">Features</p>
                    <div class="f_a">
                        <p><i class="fa fa-line-chart" aria-hidden="true"></i> Productivity tracking</p>
                        <p><i class="fa fa-clock-o" aria-hidden="true"></i> Automatic time tracking</p>
                        <p><i class="fa fa-bar-chart" aria-hidden="true"></i> Reporting</p>
                        <p><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Timesheet approvals</p>
                        <p><i class="fa fa-database" aria-hidden="true"></i> Invoicing</p>
                        <p><i class="fa fa-money" aria-hidden="true"></i> Billing rates & budgting</p>
                        <p><i class="fa fa-braille" aria-hidden="true"></i> Attendance</p>
                    </div>
                </div>
                <p class="text" onclick="(location.href='pricing.html')">Pricing</p>
                <div class="drop" >
                    <p class="text">Integrations</p>
                    <div class="f_a">
                        <p>Trello</p>
                        <p>Google Calendar</p>
                        <p>iCal</p>
                        <p>Asana</p>
                        <p>Monday.com</p>
                        <p>Jira</p>
                        <p>All integrations</p>
                    </div>
                </div>
                <p class="text" onclick="(location.href='blog.html')">Blog</p>
            </div>
        </div>
        <div id="buttom_2">
        <div><p class="text" onclick="(location.href='Bookdemo.html')">Book a Demo</p></div> 
        <div><p class="text" onclick="(location.href='signUp.html')">Sign in</p></div>
        <button><a href="https://app.timecamp.com/dashboard">Go to App</a></button>
        </div>
    </div>
</div>`
}
export default navbar


