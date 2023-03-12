export default class Globals {
	static HideProjects = (process.env.REACT_APP_HIDE_PROJECTS === 'true' || process.env.REACT_APP_HIDE_PROJECTS === true)
	static HideCourses = (process.env.REACT_APP_HIDE_COURSES === 'true' || process.env.REACT_APP_HIDE_COURSES === true)
}