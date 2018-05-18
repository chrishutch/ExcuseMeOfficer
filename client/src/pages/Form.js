import React from 'react'
import { render } from 'react-dom'
import Styles from '../components/Form/Styles'
import { Field } from 'react-final-form'
import API from "../utils/API";
import Wizard from '../components/Form/Wizard'
import Info from '../components/Form/Info'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
      API.saveReview(values)
    }


const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : 'Required')

const Form = () => (
  <div>
  <Styles>
    <h1>Leave Officer Feedback</h1>
    <Info />
    <Wizard
      // initialValues={{ employed: true, stooge: 'larry' }}
      onSubmit={onSubmit}
    >
      <Wizard.Page>
        <div>
          <label>Date</label>
          <Field
            name="dateCollected"
            component="input"
            type="date"            
            // validate={required}
          />
          <Error name="dateCollected" />
        </div>
        <div>
          <label>Time</label>
          <Field
            name="timeCollected"
            component="input"
            type="time"
            // validate={required}
          />
          <Error name="dateCollected" />
        </div>
      </Wizard.Page>
      <Wizard.Page>
        <div>
          <label>Address</label>
          <Field
            name="address"
            component="input"
            type="input"
            placeholder="1234 West Palm Street"
          />
          <Error name="address" />
        </div>
        <div>
          <label>City</label>
          <Field
            name="city"
            component="input"
            type="input"
            placeholder="Chicago"
          />
          <Error name="city" />
          <Field name="state" component="select">
            <option />
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AR">AR</option>  
            <option value="AZ">AZ</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DC">DC</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="IA">IA</option>  
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="MA">MA</option>
            <option value="MD">MD</option>
            <option value="ME">ME</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MO">MO</option>  
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="NC">NC</option>  
            <option value="NE">NE</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>      
            <option value="NV">NV</option>
            <option value="NY">NY</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WI">WI</option>  
            <option value="WV">WV</option>
            <option value="WY">WY</option>
          </Field>
          <Error name="state" />
          </div>
          <div>
          <label>Zip Code</label>
          <Field
            name="zipcode"
            component="input"
            type="input"
            placeholder="60602"
          />
          <Error name="zipcode" />
        </div>
      </Wizard.Page>
      <Wizard.Page>
       <div>
          <label>Describe your experience</label>
          <Field name="experience" component="select">
            <option value="Great Service">Great Service</option>
            <option value="Heroic">Heroic</option>
            <option value="Average">Average</option>
            <option value="Bad Policing">Bad Policing</option>
            <option value="Racial Discrimination">Racial Discrimination</option>
            <option value="Sexual Harassment">Sexual Harassment</option>
            <option value="LGBT Inequality">LGBT Inequality</option>
          </Field>
        </div>
        <div>
          <label>Rate your experience.</label>
          <div>
            <label>
              <Field
                name="rating"
                component="input"
                type="radio"
                value="1"
              />
              ⭐
            </label>
            <label>
              <Field name="rating" component="input" type="radio" value="2" />
              ⭐
            </label>
            <label>
              <Field
                name="rating"
                component="input"
                type="radio"
                value="3"
              />
              ⭐
            </label>
            <label>
              <Field
                name="rating"
                component="input"
                type="radio"
                value="4"
              />
              ⭐
            </label>
            <label>
              <Field
                name="rating"
                component="input"
                type="radio"
                value="5"
              />
              ⭐
            </label>
          </div>
        </div>
      </Wizard.Page>
 
      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.feedback) {
            errors.feedback = 'Required'
          }
          return errors
        }}
      >
        <h2>What happened?</h2>
        <div>
          <label>Feedback</label>
          <Field name="feedback" component="textarea" placeholder="Excuse me officer..." />
          <Error name="feedback" />
        </div>
      {/*  <div>
          <label>Evidence</label>
          <Field name="evidence" component="file" input="File" />
        </div>  */}
      </Wizard.Page>
           <Wizard.Page>
           <h2>Additional Information</h2>
        <div>
          <label>Witness?</label>
          <Field name="witness" component="input" type="checkbox" />
        </div>
               <div>
          <label>Officer Name(s)</label>
          <Field
            name="officerName"
            component="input"
            type="input"
            placeholder="Officer John"
          />
        </div>
                <div>
          <label>Officer Badge(s)</label>
          <Field
            name="officerBadge"
            component="input"
            type="input"
            placeholder="OE12345"
          />
        </div>
                <div>
          <label>Ticket/Citation</label>
          <Field
            name="ticketNumber"
            component="input"
            type="input"
            placeholder="XXX12345"
          />
        </div>
      </Wizard.Page>
    </Wizard>
  </Styles>
  </div>
);


export default Form;
