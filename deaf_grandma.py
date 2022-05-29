def deaf_grandma():
    count = 0
    prompt = input("Say hello to MeeMaw!\n")
    while count < 2:
        if prompt == '':
            prompt = input("WHAT?!\n")
        elif prompt != prompt.upper():
            prompt = input("SPEAK UP, KID!\n")
        elif prompt == "GOODBYE!":
            if count == 1:
                print("LATER, SKATER!")
                return
            else: prompt = input("LEAVING SO SOON?!\n")
            count += 1
        elif prompt == prompt.upper():
            prompt = input("NO, NOT SINCE 1946!\n")

deaf_grandma()
