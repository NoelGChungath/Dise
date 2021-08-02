import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./predictor.css";
import { Modal, Button, Form, Card } from "react-bootstrap";

import axios from "axios";

let symptomsAr =
  `Heberden's node,Murphy's sign,Stahli's line,abdomen acute,abdominal bloating,abdominal tenderness,abnormal sensation,abnormally  hard consistency,abnormally hard consistency,abortion,abscess bacterial,absences finding,achalasia,ache,adverse effect,adverse reaction,agitation,air fluid level,alcohol binge episode,alcoholic withdrawal symptoms,ambidexterity,angina  pectoris,angina pectoris,anorexia,anosmia,aphagia,apyrexial,arthralgia,ascites,asterixis,asthenia,asymptomatic,ataxia,atypia,aura,awakening early,barking cough,bedridden,behavior hyperactive,behavior showing increased motor activity,blackout,blanch,bleeding of vagina,bowel sounds decreased,bradycardia,bradykinesia,breakthrough pain,breath  sounds decreased,breath sounds decreased,breath-holding spell,breech presentation,bruit,burning  sensation,burning sensation,cachexia,cardiomegaly,cardiovascular  finding,cardiovascular event,catatonia,catching breath,charleyhorse,chest  tightness,chest discomfort,chest tightness,chill,choke,cicatrisation,clammy skin,claudication,clonus,clumsiness,colic abdominal,consciousness clear,constipation,coordination abnormal,cough,cushingoid facies,cushingoid habitus,cyanosis,cystic lesion,debilitation,decompensation,decreased  translucency,decreased body weight,decreased stool caliber,decreased translucency,diarrhea,difficulty,difficulty passing urine,disequilibrium,distended  abdomen,distended abdomen,distress  respiratory,distress respiratory,disturbed family,dizziness,dizzy spells,drool,drowsiness,dullness,dysarthria,dysdiadochokinesia,dysesthesia,dyspareunia,dyspnea,dyspnea  on exertion,dyspnea on exertion,dysuria,ecchymosis,egophony,elation,emphysematous change,energy  increased,energy increased,enuresis,erythema,estrogen use,excruciating pain,exhaustion,extrapyramidal sign,extreme exhaustion,facial  paresis,facial paresis,fall,fatigability,fatigue,fear of falling,fecaluria,feces in rectum,feeling  hopeless,feeling  suicidal,feeling hopeless,feeling strange,feeling suicidal,feels hot/feverish,fever,flare,flatulence,floppy,flushing,focal seizures,food  intolerance,food intolerance,formication,frail,fremitus,frothy sputum,gag,gasping for breath,general  discomfort,general discomfort,general unsteadiness,giddy mood,gravida 0,gravida 10,green  sputum,green sputum,groggy,guaiac positive,gurgle,hacking cough,haemoptysis,haemorrhage,hallucinations  auditory,hallucinations  visual,hallucinations auditory,hallucinations visual,has religious belief,headache,heartburn,heavy feeling,heavy legs,hematochezia,hematocrit decreased,hematuria,heme positive,hemianopsia homonymous,hemiplegia,hemodynamically stable,hepatomegaly,hepatosplenomegaly,hirsutism,history  of - blackout,hoard,hoarseness,homelessness,homicidal thoughts,hot flush,hunger,hydropneumothorax,hyperacusis,hypercapnia,hyperemesis,hyperhidrosis disorder,hyperkalemia,hypersomnia,hypersomnolence,hypertonicity,hyperventilation,hypesthesia,hypoalbuminemia,hypocalcemia result,hypokalemia,hypokinesia,hypometabolism,hyponatremia,hypoproteinemia,hypotension,"hypothermia, natural",hypotonic,hypoxemia,immobile,impaired cognition,inappropriate affect,incoherent,indifferent mood,intermenstrual heavy bleeding,intoxication,irritable  mood,irritable mood,jugular  venous distention,jugular venous distention,labored breathing,lameness,large-for-dates fetus,left atrial hypertrophy,lesion,lethargy,lightheadedness,lip smacking,loose associations,low back pain,lung nodule,macerated skin,macule,malaise,mass in breast,mass of body structure,mediastinal shift,mental  status changes,mental status changes,metastatic lesion,milky,moan,monoclonal,monocytosis,mood  depressed,mood depressed,moody,motor  retardation,motor retardation,muscle hypotonia,muscle twitch,myalgia,mydriasis,myoclonus,nasal discharge present,nasal flaring,nausea,nausea and vomiting,neck stiffness,neologism,nervousness,night  sweat,night sweat,nightmare,no known drug allergies,no status change,noisy respiration,non-productive  cough,non-productive cough,nonsmoker,numbness,numbness  of hand,numbness of hand,oliguria,orthopnea,orthostasis,out  of breath,out of breath,overweight,pain,pain  chest,pain abdominal,pain back,pain chest,pain foot,pain in lower limb,pain neck,painful swallowing,pallor,palpitation,panic,pansystolic murmur,para 1,para 2,paralyse,paraparesis,paresis,paresthesia,passed stones,patient non compliance,pericardial friction rub,phonophobia,photophobia,photopsia,pin-point pupils,pleuritic  pain,pleuritic pain,pneumatouria,polydypsia,polymyalgia,polyuria,poor dentition,poor feeding,posterior rhinorrhea,posturing,presence of q wave,pressure  chest,pressure chest,previous pregnancies 2,primigravida,prodrome,productive  cough,productive cough,projectile vomiting,prostate tender,prostatism,proteinemia,pruritus,pulse absent,pulsus paradoxus,pustule,qt interval prolonged,r wave feature,rale,rambling speech,rapid shallow breathing,red blotches,redness,regurgitates after swallowing,renal angle tenderness,rest pain,retch,retropulsion,rhd positive,rhonchus,rigor - temperature-associated observation,rolling of eyes,room spinning,satiety early,scar tissue,sciatica,scleral icterus,scratch marks,sedentary,seizure,sensory discomfort,shooting pain,shortness  of breath,shortness of breath,side pain,sinus rhythm,sleeplessness,sleepy,slowing of urinary stream,sneeze,sniffle,snore,snuffle,soft tissue swelling,sore to touch,spasm,speech  slurred,speech slurred,splenomegaly,spontaneous rupture of membranes,sputum purulent,st segment depression,st segment elevation,stiffness,stinging sensation,stool color yellow,stridor,stuffy nose,stupor,suicidal,superimposition,sweat,sweating  increased,sweating increased,swelling,symptom  aggravating factors,symptom aggravating factors,syncope,systolic ejection murmur,systolic murmur,t wave inverted,tachypnea,tenesmus,terrify,thicken,throat sore,throbbing sensation quality,tinnitus,tired,titubation,todd paralysis,tonic seizures,transaminitis,transsexual,tremor,tremor resting,tumor cell invasion,unable  to concentrate,unable to concentrate,unconscious  state,unconscious state,uncoordination,underweight,unhappy,unresponsiveness,unsteady  gait,unsteady gait,unwell,urge  incontinence,urge incontinence,urgency of micturition,urinary hesitation,urinoma,verbal  auditory hallucinations,verbal auditory hallucinations,verbally abusive behavior,vertigo,vision blurred,vomiting,weepiness,weight gain,welt,wheelchair bound,wheezing,withdraw,worry,yellow  sputum
`.split(",");

class DiseasePredictor extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", result: [], toggle: false, toggle_two: false };
  }

  onTextChange = (event) => {
    this.setState({ value: event.target.value });
  };
  predictDisease = () => {
    const { value } = this.state;
    if (value.length > 0) {
      axios
        .post("/predictDisease", { text: value })
        .then((response) => {
          let result = response.data;
          if (result.status == "success") {
            let data = result.result;
            this.setState({ result: data, toggle: true });
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };

  handleOptionClose = () => this.setState({ toggle_two: false });

  handleOptionOpen = () => this.setState({ value: "", toggle_two: true });

  handleClose = () => this.setState({ toggle: false });
  handleForm = (idx) => {
    let { value } = this.state;
    value += symptomsAr[idx];
    this.setState({ value });
  };
  render() {
    const { result, toggle, toggle_two } = this.state;
    return (
      <div>
        <div id="editor" className="editor-holder">
          <textarea onChange={this.onTextChange}></textarea>
        </div>

        <button
          type="button"
          onClick={this.predictDisease}
          className="btn btn-light predict"
        >
          Predict Disease
        </button>

        <button
          type="button"
          onClick={this.handleOptionOpen}
          className="btn btn-light advBtn"
        >
          Advance Options
        </button>

        <Modal show={toggle} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Predicted Diseases</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {result.map((val, idx) => {
              return (
                <Card className="mb-1" body key={idx}>
                  {val.disease}
                </Card>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={toggle_two} onHide={this.handleOptionClose}>
          <Modal.Header closeButton>
            <Modal.Title>Select Symptoms</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {symptomsAr.map((val, idx) => {
                return (
                  <Form.Check
                    type={"checkbox"}
                    ref={val}
                    onChange={() => this.handleForm(idx)}
                    inline
                    key={idx}
                    label={val}
                  />
                );
              })}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleOptionClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default DiseasePredictor;
