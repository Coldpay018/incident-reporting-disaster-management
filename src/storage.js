const KEY = 'disaster_app_incidents';
const types = ['Flood','Fire','Road Accident','Landslide','Road Blockage','Infrastructure Damage'];
const severities = ['High','Critical','Medium','High','Low','Medium'];
const statuses = ['RESPONDING','VERIFIED','REPORTED','ASSIGNED','RESOLVED','REJECTED'];
const locations = ['Railway underpass','North Market','Lake Road','Hillview','Station Road','Central Avenue'];
const seed = types.map((type,i) => ({incidentId:`INC-DEMO0${i+1}`, reporterEmail:'demo@community.local', type, severity:severities[i], description:`A ${type.toLowerCase()} incident has been reported near ${locations[i]}. Please assess the situation and coordinate a response.`, locationName:locations[i], latitude:'11.0168', longitude:'76.9558', status:statuses[i], createdAt:new Date(Date.now()-(i+1)*86400000).toISOString(), updatedAt:new Date(Date.now()-(i+1)*86400000).toISOString()}));
export function getIncidents(){ try { const raw=localStorage.getItem(KEY); if(raw===null){saveIncidents(seed); return seed;} const data=JSON.parse(raw); return Array.isArray(data) ? data.filter(x=>x && typeof x.incidentId==='string') : []; } catch { return []; } }
export function saveIncidents(items){localStorage.setItem(KEY,JSON.stringify(items));}
export function addIncident(item){saveIncidents([item,...getIncidents()]);}
export function updateIncident(id,changes){const items=getIncidents(); const index=items.findIndex(x=>x.incidentId===id); if(index<0)return false; items[index]={...items[index],...changes,updatedAt:new Date().toISOString()}; saveIncidents(items); return true;}
export function getIncidentById(id){return getIncidents().find(x=>x.incidentId===id);}
export const incidentTypes=['Flood','Fire','Road Accident','Landslide','Earthquake','Road Blockage','Infrastructure Damage','Medical Emergency','Other'];
export const severityLevels=['Low','Medium','High','Critical'];
export const statusOptions=['REPORTED','VERIFIED','ASSIGNED','RESPONDING','RESOLVED','REJECTED'];
export function newId(){let id; do {id='INC-'+crypto.randomUUID().replaceAll('-','').slice(0,6).toUpperCase();} while(getIncidentById(id)); return id;}
