const Header = (props) => {
  console.log('Header Loaded!')
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log('Part Loaded!')
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  console.log('Content Loaded!')
  return (
    <>
      <Part part={props.part[0]} exercises={props.exercises[0]}/>
      <Part part={props.part[1]} exercises={props.exercises[1]}/>
      <Part part={props.part[2]} exercises={props.exercises[2]}/>
    </>
  )
}

const Total = (props) => {
  console.log('Total Loaded!')
  return (
    <>
      <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const part = [part1,part2,part3]
  const exercises = [exercises1, exercises2, exercises3]
  return (
    <div>
      <Header course = {course}/>
      <Content part = {part} exercises = {exercises}/>
      <Total exercises = {exercises}/>
    </div>
  )
}

export default App