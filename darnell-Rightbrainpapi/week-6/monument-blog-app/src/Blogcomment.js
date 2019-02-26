import React, { Component } from 'react'; //<--es6 way of importing the react library and Component class
// import './App.css'; //<-- importing styling



class Blogcomment extends Component{
    render () {
        return (
        <section class="comment">
		<div class="wrap">
		<h2>Leave a Comment</h2>
			<form>
				<input type="text" placeholder="Name" class="col-half"/>
				<input type="email" placeholder="Email" class="col-half"/>
				<textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	</section>

        )
    }
}

export default Blogcomment;