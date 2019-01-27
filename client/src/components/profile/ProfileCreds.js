import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { education, experience } = this.props;
    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strop>Position:</strop> {exp.title}
        </p>
        <p>
          {exp.location === "" ? null : (
            <span>
              <strong>Location:</strong> {exp.location}
            </span>
          )}
        </p>
        <p>
          {exp.description === "" ? null : (
            <span>
              <strong>Description:</strong> {exp.description}
            </span>
          )}
        </p>
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strop>Degree:</strop> {edu.Degree}
        </p>
        <p>
          <strop>Field of Study:</strop> {edu.fieldofstudy}
        </p>
        <p>
          {edu.location === "" ? null : (
            <span>
              <strong>Location:</strong> {edu.location}
            </span>
          )}
        </p>
        <p>
          {edu.description === "" ? null : (
            <span>
              <strong>Description:</strong> {edu.description}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-ceter text-info">Experience</h3>
          {experience.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p>No experience listed.</p>
          )}
        </div>
        <div className="col-md-6">
          <h3 className="text-ceter text-info">Education</h3>
          {education.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p>No education listed.</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
