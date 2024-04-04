import React from 'react'

const MoodTrackerContext = React.createContext({
  homeActive: '',
  reportActive: '',
  onHomeClick: () => {},
  onReportClick: () => {},
  calenderList: [],
  onChangeCalenderList: () => {},
  emojisListNew: [],
  daysList: [],
  nameDayCount: '',
  activeEmoji: '',
  activeEmojiName: '',
  activeDay: '',
  month: '',
  onEmojiClick: () => {},
  onEmojiNameChange: () => {},
  onDayChange: () => {},
  getNameDayCount: () => {},
  onChangeMonth: () => {},
  onLeftArrowClick: () => {},
  onRightArrowClick: () => {},
  onReportCalenderChange: () => {},
  reportCalenderMonth: '',
  calenderReportList: [],
})

export default MoodTrackerContext
