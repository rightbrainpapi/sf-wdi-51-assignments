

## Part I: Members, Students and Instructors


class Member():
    total_members =0
    def __init__(self, fullname):
        self.fullname = fullname

    def introduce(self):
        print(f'Hi, I am {self.fullname}!')



darnell = Member("Darnell Simon")

darnell.introduce()


class Student(Member):
    def __init__(self, fullname, reason):
        Member.__init__(self, fullname)
        self.reason = reason


    def my_reason(self):
        print(f'I always wanted to make {self.reason}')



darnell = Student("Darnell Simon", "websites")

darnell.introduce()

darnell.my_reason()

class Instructor(Member):
    def __init__(self, fullname, bio, skills ):
        Member.__init__(self, fullname)
        self.bio = bio
        self.skills = []


    def my_bio(self):
        print(f'I have always {self.bio}')

    def add_skill(self, new_skill):
        self.skills.append(new_skill)


# darnell = Instructor("Darnell Simon", "wanted to become a software engineer.", "write")
# darnell.my_bio()

# darnell.add_skill("problem solving")
# darnell.add_skill("design")
# #How do I check to see what is in skills array?
# #Print it.
# print(darnell.skills)


class Workshop:
    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        self.students = []
        self.instructor = []

    def add_participant(self, participant):
        if isinstance(participant, Student):
            self.students.append(participant)
        elif isinstance(participant, Instructor):
            self.instructor.append(participant)
    
    def print_details(self):
        print(f'Workshop - {self.date} - {self.subject}')
        print("Students")
        for index in range(len(self.students)):
            print(f"{index + 1}. {self.students[index].full_name} - {self.students[index].reason}")
        
        # print("Instructors")
        # for index, instructor in enumerate(self.instructors):
        #     print(f"{index + 1}. {instructor.full_name} - {', '.join(instructor.skills)} \n {instructor.bio}")

# class Workshop():
#     def __init__(self, codingschool):
#         self.codingschool = codingschool



workshop = Workshop("12/03/2014", "Shutl")



workshop.print_details()





