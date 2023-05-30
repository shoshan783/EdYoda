import React, { Component } from "react";
import ReactDOM from "react-dom";
class EdYoda extends Component {
  state = {
    plan: "annual",
    price: 179,
    discountedPrice: 25
  };

  handlePlanChange = (event) => {
    this.setState({
      plan: event.target.value
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>EdYoda</h1>
          <nav>
            <a href="https://www.edyoda.com/courses/">Courses </a>
            <a href="https://www.edyoda.com/university/"> University </a>
            <a href="https://www.edyoda.com/refer-and-earn/"> Refer & Earn </a>
            <a href="https://www.edyoda.com/jobs/"> Jobs </a>
            <a href="https://www.edyoda.com/edyoda-daily-zens/">
              {" "}
              EdYoda Daily Zens{" "}
            </a>
            <a href="https://www.edyoda.com/profile/"> Profile </a>
          </nav>
        </header>
        <main>
          <section>
            <h2>
              Access curated courses worth ₹ 18,500 at just ₹ 99 per year!
            </h2>
            <ul>
              <li>100+ Job relevant courses </li>
              <li>20,000+ Hours of content live</li>
              <li>Exclusive webinar access</li>
              <li>Scholarship worth ₹94,500</li>
              <li>Ad Free learning experience</li>
            </ul>
          </section>
          <section>
            <h2>STEP 2 of 2</h2>
            <h3>Select your subscription plan</h3>
            <ul>
              <li>
                <input
                  type="radio"
                  name="plan"
                  value="annual"
                  checked={this.state.plan === "annual"}
                  onChange={this.handlePlanChange}
                />
                <label htmlFor="annual">Annual Premium Subscription</label>
                <span>₹{this.state.price}/month</span>
                <span>₹{this.state.discountedPrice} Annually</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="plan"
                  value="monthly"
                  checked={this.state.plan === "monthly"}
                  onChange={this.handlePlanChange}
                />
                <label htmlFor="monthly">Monthly Premium Subscription</label>
                <span>₹{this.state.price}/month</span>
                <span>Billed Monthly</span>
              </li>
            </ul>
            <input type="submit" value="Proceed to Pay" />
          </section>
        </main>
        <footer>
          <p>Copyright &copy; 2023 EdYoda</p>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<EdYoda />, document.getElementById("root"));
