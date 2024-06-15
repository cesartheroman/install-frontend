import asyncio

import prisma.errors
from prisma import Prisma
from prisma.models import User

async def createUser(name,email,street,city,state,zip,phone):

    printstr = "Creating user..."
    try:
        user = await User.prisma().create(
            data={
                'name': name,
                'email': email,
                'street': street,
                'city': city,
                'state': state,
                'zip': zip,
                'phone': phone
            },
        )

        printstr = "User Created"

    except prisma.errors.UniqueViolationError:
        printstr = "User is not unique"

    except prisma.errors.FieldNotFoundError:
        printstr = "One or more of the required fields is not filled out properly"



    return printstr

async def createAppliance(db,email,applianceType,applianceEnergy,applianceModelId):

    printstr = "Creating appliance..."
    applianceTypes = ["dryer","washer","dishwasher","hvac"]


    user = await db.user.find_unique(
        where={
            'email': email,
        }
    )
    if applianceType not in applianceTypes:
        printstr = "Appliance type is not valid"
    elif not user:
        printstr = "User does not currently exist"
    else:
        if applianceType == "dryer":
            dryer = {
                'applianceType': applianceEnergy,
                'applianceModelId': applianceModelId,
                'ownerId': user.id
            }
            try:
                adddryer = await db.dryer.create(
                    data=dryer
                )
                printstr = "Dryer created"
            except prisma.errors.MissingRequiredValueError:
                printstr = "Required values are missing or incorrect"

        elif applianceType == "washer":
            washer = {
                'applianceType': applianceEnergy,
                'applianceModelId': applianceModelId,
                'ownerId': user.id
            }
            try:
                addwasher = await db.washer.create(
                    data=washer
                )
                printstr = "Washer created"
            except prisma.errors.MissingRequiredValueError:
                printstr = "Required values are missing or incorrect"
        elif applianceType == "hvac":
            hvac = {
                'applianceType': applianceEnergy,
                'applianceModelId': applianceModelId,
                'ownerId': user.id
            }
            try:
                addhvac = await db.hvac.create(
                    data=hvac
                )
                printstr = "HVAC created"
            except prisma.errors.MissingRequiredValueError:
                printstr = "Required values are missing or incorrect"
        elif applianceType == "dishwasher":
            dishwasher = {
                'applianceType': applianceEnergy,
                'applianceModelId': applianceModelId,
                'ownerId': user.id
            }
            try:
                adddishwasher = await db.dryer.create(
                    data=dishwasher
                )
                printstr = "Dishwasher created"
            except prisma.errors.MissingRequiredValueError:
                printstr = "Required values are missing or incorrect"

    return printstr
