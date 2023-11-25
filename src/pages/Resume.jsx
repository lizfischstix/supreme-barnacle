export default function Resume() {
  return (
    <div className="mt-3">
      <span className="resumeDL">Download a PDF of Liz's full resume <a href="src/assets/LizFischenich_Resume.pdf" download="LizFischenich_Resume.pdf">HERE</a>.</span>
      <div className="container">
        <div className="mt-3 row">
          <div className="col-sm-6  front-end">
            <ul className="font-weight-bold"><strong className="h4 perfect">Front-end Proficencies</strong>
              <li>HTML</li>
              <li>CSS</li>
              <li>Responive Design</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>JavaScript</li>
              <li>Handlebars</li>
              <li>React</li>
            </ul>
          </div>
          <div className="col-sm-6 front-end">
            <ul className="font-weight-bold"><strong className="h4 perfect">Back-end Proficencies</strong>
              <li>Node</li>
              <li>Express</li>
              <li>APIs</li>
              <li>MySQL/Sequelize</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
          <div className="col-sm-12 align-center other">
            <ul className="font-weight-bold"><strong className="h4 cupcakes">Other Proficencies</strong>
              <li>Design thinking</li>
              <li>Record keeping</li>
              <li>Presentations</li>
              <li>Cross-functional teamwork</li>
              <li>Educational technologies</li>
              <li>Digital marketing</li>
              <li>Custommer service</li>
            </ul>
        </div>
      </div>

    </div>
  );
}
